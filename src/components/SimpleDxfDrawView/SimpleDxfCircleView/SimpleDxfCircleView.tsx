import React, { Component } from "react";
import { SimpleDxfCircleViewProps } from "./SimpleDxfCircleViewProps";
import { Circle } from "react-konva";
import { SimpleDxfCircleViewState } from "./SimpleDxfCircleViewState";
import { SimpleDxfDrawColorExtensions } from "../SimpleDxfDrawColorExtensions";
import chroma from "chroma-js";

export class SimpleDxfCircleView extends Component<SimpleDxfCircleViewProps, SimpleDxfCircleViewState> {
    render() {
        let stroke = SimpleDxfDrawColorExtensions.getDescription(this.props.drawObject.stroke);
        let fill = SimpleDxfDrawColorExtensions.getDescription(this.props.drawObject.fill);

        if (this.props.drawPart.needRefinement) {
            const color2 = "#ffdee7";

            stroke = chroma.blend(stroke, color2, "darken").hex();
            fill = chroma.blend(fill, color2, "darken").hex();
        }

        if (this.props.highlighted) {
            fill = stroke;
        }

        return (
            <Circle
                x={this.props.drawObject.args[0]}
                y={this.props.drawObject.args[1]}
                radius={this.props.drawObject.args[2]}
                fill={fill}
                stroke={stroke}
                strokeWidth={this.props.drawObject.strokeWidth}
            />
        );
    }
}
