import {SimpleField} from "./SimpleField";
import React from "react";
import {Image} from "react-bootstrap";

export class SimpleImageField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    text?: string;

    ascendingOrdering?: any;
    descendingOrdering?: any;

    visible?: boolean;

    constructor(
        title?: React.ReactNode,
        field?: string,
        text?: string,
        ascendingOrdering?: any,
        descendingOrdering?: any,
        visible?: boolean
    ) {
        this.title = title;
        this.name = field;
        this.text = text;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
        this.visible = visible;
    }

    render(item: any): React.ReactNode {
        let src = item[this.name ?? ""];
        return (
            <a href={src}>
                <Image src={src} title={this.text} thumbnail/>
            </a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.name ?? ""];
    }
}
