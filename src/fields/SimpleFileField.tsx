import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleFileField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    text?: React.ReactNode;

    ascendingOrdering?: any;
    descendingOrdering?: any;

    visible?: boolean;

    constructor(
        title?: React.ReactNode,
        name?: string,
        text?: React.ReactNode,
        ascendingOrdering?: any,
        descendingOrdering?: any,
        visible?: boolean
    ) {
        this.title = title;
        this.name = name;
        this.text = text;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
        this.visible = visible;
    }

    render(item: any): React.ReactNode {
        return (
            <a href={item[this.name ?? ""]}>{this.text}</a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.name ?? ""];
    }
}
