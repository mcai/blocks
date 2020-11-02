import React, { Component } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { SimpleDxfDrawViewProps } from "./SimpleDxfDrawViewProps";
import { SimpleDxfDrawViewState } from "./SimpleDxfDrawViewState";
import { SimpleDxfPartView } from "./SimpleDxfPartView/SimpleDxfPartView";
import { SimpleDxfDrawPart } from "./SimpleDxfDrawPart";
import { SimpleIf } from "../SimpleIf/SimpleIf";

export class SimpleDxfDrawView extends Component<SimpleDxfDrawViewProps, SimpleDxfDrawViewState> {
    private refContainer: any;

    constructor(props: SimpleDxfDrawViewProps) {
        super(props);

        this.state = {
            scale: 1.0,

            selectedDrawPart: undefined,
        };

        window.addEventListener("resize", () => {
            this.fitStageIntoParentContainer();
        });
    }

    componentDidUpdate(
        prevProps: Readonly<SimpleDxfDrawViewProps>,
        prevState: Readonly<SimpleDxfDrawViewState>,
        snapshot?: any,
    ) {
        if (prevProps.dxfFileDraw !== this.props.dxfFileDraw) {
            this.fitStageIntoParentContainer();
        }
    }

    private static getDescription(drawPart: SimpleDxfDrawPart) {
        let metaData1 = `GUID:${drawPart.guid}`;

        if (drawPart.metaData1) {
            metaData1 = `配件#${drawPart.metaData1}`;
        }

        return `${metaData1}
                ,宽高:${drawPart.boundingBoxWidth.toFixed(2)}x${drawPart.boundingBoxHeight.toFixed(2)}毫米^2
                ,周长:${drawPart.totalLength.toFixed(2)}毫米,面积:${drawPart.area.toFixed(2)}毫米^2
                ,零碎:${!drawPart.isClosed ? "是" : "否"}`;
    }

    // TODO: to be shown in the properties view
    private getDescription(): React.ReactNode {
        return this.state.highlightedDrawPart !== undefined
            ? SimpleDxfDrawView.getDescription(this.state.highlightedDrawPart)
            : "请选择配件";
    }

    private getStageWidth(): number | undefined {
        return this.props.sheetWidth !== undefined ? this.props.sheetWidth : this.props.dxfFileDraw?.width;
    }

    private getStageHeight(): number | undefined {
        return this.props.sheetHeight !== undefined ? this.props.sheetHeight : this.props.dxfFileDraw?.height;
    }

    private fitStageIntoParentContainer() {
        const stageWidth = this.getStageWidth() ?? 0.0;
        const stageHeight = this.getStageHeight() ?? 0.0;

        const containerWidth = this.refContainer?.offsetWidth;
        const containerHeight = this.refContainer?.offsetHeight;

        const scale = Math.min(containerWidth / stageWidth, containerHeight / stageHeight);

        this.setState({
            scale: scale * (this.props.scale ?? 1.0),
        });
    }

    render(): React.ReactNode {
        return (
            <div
                ref={(element) => {
                    this.refContainer = element;
                }}
            >
                {this.props.thumbnailJpgFileName !== undefined && !this.props.dxfFileDraw && (
                    <a href={`${this.props.thumbnailJpgFileName}`} rel="noopener noreferrer" target={"_blank"}>
                        <img src={`${this.props.thumbnailJpgFileName}`} alt={""} />
                    </a>
                )}

                <SimpleIf condition={this.props.dxfFileDraw !== undefined}>
                    <Stage
                        width={(this.getStageWidth() ?? 0.0) * this.state.scale}
                        height={(this.getStageHeight() ?? 0.0) * this.state.scale}
                        scale={{ x: this.state.scale, y: this.state.scale }}
                    >
                        <Layer scaleY={-1} offsetY={this.getStageHeight() ?? 0.0}>
                            <Rect
                                x={0.0}
                                y={0.0}
                                width={this.getStageWidth()}
                                height={this.getStageHeight()}
                                fill={"white"}
                                stroke={"deepPink"}
                                strokeWidth={2}
                                dash={[2, 10]}
                            />
                        </Layer>

                        <Layer scaleY={-1} offsetY={this.getStageHeight() ?? 0.0}>
                            {this.props.dxfFileDraw?.drawParts.map((drawPart) => (
                                <SimpleDxfPartView
                                    key={drawPart.guid}
                                    drawPart={drawPart}
                                    onHighlightedChanged={(highlighted) =>
                                        this.setState({
                                            highlightedDrawPart: highlighted ? drawPart : undefined,
                                        })
                                    }
                                    onClick={() => {
                                        this.setState({
                                            selectedDrawPart: drawPart,
                                        });

                                        alert(SimpleDxfDrawView.getDescription(drawPart));
                                    }}
                                />
                            ))}
                        </Layer>
                    </Stage>
                </SimpleIf>
            </div>
        );
    }
}
