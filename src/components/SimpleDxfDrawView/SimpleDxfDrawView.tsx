import React, { Component } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { SimpleDxfDrawViewProps } from "./SimpleDxfDrawViewProps";
import { SimpleDxfDrawViewState } from "./SimpleDxfDrawViewState";
import { SimpleDxfPartView } from "./SimpleDxfPartView/SimpleDxfPartView";
import { SimpleIf } from "../SimpleIf/SimpleIf";
import { SimpleDxfDrawPartExtensions } from "./SimpleDxfDrawPartExtensions";

export class SimpleDxfDrawView extends Component<SimpleDxfDrawViewProps, SimpleDxfDrawViewState> {
    private refContainer: any;

    constructor(props: SimpleDxfDrawViewProps) {
        super(props);

        this.state = {
            scale: 1.0,
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
                            {this.props.dxfFileDraw?.drawParts
                                .filter((x) => !this.props.showNeedRefinementOnly || x.needRefinement)
                                .map((drawPart) => (
                                    <SimpleDxfPartView
                                        key={drawPart.guid}
                                        drawPart={drawPart}
                                        onHighlightedChanged={(highlighted) => {
                                            if (this.props.onHighlightedChanged) {
                                                this.props.onHighlightedChanged(drawPart, highlighted);
                                            }
                                        }}
                                        onClick={() => {
                                            if (this.props.onClick) {
                                                this.props.onClick(drawPart);
                                            } else {
                                                alert(SimpleDxfDrawPartExtensions.getDescription(drawPart));
                                            }
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
