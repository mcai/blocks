import React, { Component } from "react";
import { SimpleDxfLineViewProps } from "./SimpleDxfLineViewProps";
import { SimpleDxfLineViewState } from "./SimpleDxfLineViewState";
import { Line } from "react-konva";
import { SimpleDxfDrawColorExtensions } from "../SimpleDxfDrawColorExtensions";
import chroma from "chroma-js";

export class SimpleDxfLineView extends Component<SimpleDxfLineViewProps, SimpleDxfLineViewState> {
    render(): React.ReactNode {
        let stroke = SimpleDxfDrawColorExtensions.getDescription(this.props.drawObject.stroke);
        let fill = SimpleDxfDrawColorExtensions.getDescription(this.props.drawObject.fill);

        if (this.props.drawPart.needRefinement) {
            const color2 = "#ffa62b";

            stroke = chroma.blend(stroke, color2, "darken").hex();
            fill = chroma.blend(fill, color2, "darken").hex();
        }

        if (this.props.highlighted) {
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
