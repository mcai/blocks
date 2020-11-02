import React, { Component } from "react";
import { SimpleDxfLineViewProps } from "./SimpleDxfLineViewProps";
import { SimpleDxfLineViewState } from "./SimpleDxfLineViewState";
import { Line } from "react-konva";
import { SimpleDxfDrawColorExtensions } from "../SimpleDxfDrawColorExtensions";

export class SimpleDxfLineView extends Component<SimpleDxfLineViewProps, SimpleDxfLineViewState> {
    render(): React.ReactNode {
        const stroke = SimpleDxfDrawColorExtensions.getDescription(this.props.drawObject.stroke);
        let fill = SimpleDxfDrawColorExtensions.getDescription(this.props.drawObject.fill);

        if (this.props.highlighted || this.props.drawPart.needRefinement) {
            fill = stroke;
        }

        return (
            <Line
                points={this.props.drawObject.args}
                fill={fill}
                stroke={stroke}
                strokeWidth={this.props.drawObject.strokeWidth}
                closed={this.props.closed}
            />
        );
    }
}
