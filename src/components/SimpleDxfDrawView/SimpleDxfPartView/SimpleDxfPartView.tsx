import React, { Component } from "react";
import { SimpleDxfPartViewProps } from "./SimpleDxfPartViewProps";
import { SimpleDxfPartViewState } from "./SimpleDxfPartViewState";
import { SimpleDxfDrawObject } from "../SimpleDxfDrawObject";
import { SimpleDxfLineView } from "../SimpleDxfLineView/SimpleDxfLineView";
import { SimpleDxfCircleView } from "../SimpleDxfCircleView/SimpleDxfCircleView";
import { Group } from "react-konva";

export class SimpleDxfPartView extends Component<SimpleDxfPartViewProps, SimpleDxfPartViewState> {
    constructor(props: SimpleDxfPartViewProps) {
        super(props);

        this.state = {
            highlighted: false,
        };
    }

    componentDidUpdate(
        prevProps: Readonly<SimpleDxfPartViewProps>,
        prevState: Readonly<SimpleDxfPartViewState>,
        snapshot?: any,
    ) {
        if (prevState.highlighted !== this.state.highlighted) {
            if (this.props.onHighlightedChanged !== undefined) {
                this.props.onHighlightedChanged(this.state.highlighted);
            }
        }
    }

    private renderDrawObject(drawObject: SimpleDxfDrawObject): React.ReactNode {
        if (drawObject === undefined) {
            return null;
        }

        switch (drawObject.type) {
            case "Line":
                return (
                    <SimpleDxfLineView drawObject={drawObject} closed={false} highlighted={this.state.highlighted} />
                );
            case "Arc":
                return (
                    <SimpleDxfLineView drawObject={drawObject} closed={false} highlighted={this.state.highlighted} />
                );
            case "Polyline":
                return <SimpleDxfLineView drawObject={drawObject} closed={true} highlighted={this.state.highlighted} />;
            case "Circle":
                return <SimpleDxfCircleView drawObject={drawObject} highlighted={this.state.highlighted} />;
        }

        throw new Error("Not supported draw object type");
    }

    render(): React.ReactNode {
        return (
            <Group
                onClick={() => {
                    if (this.props.onClick !== undefined) {
                        this.props.onClick();
                    }
                }}
                onMouseEnter={() => {
                    this.setState({
                        highlighted: true,
                    });
                }}
                onMouseLeave={() => {
                    this.setState({
                        highlighted: false,
                    });
                }}
            >
                {this.props.drawPart.drawObjects.map((drawObject) => this.renderDrawObject(drawObject))}
            </Group>
        );
    }
}
