import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleUrlField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    text?: React.ReactNode;

    ascendingOrdering?: any
    descendingOrdering?: any

    constructor(
        title?: React.ReactNode,
        name?: string,
        text?: React.ReactNode,
        ascendingOrdering?: any,
        descendingOrdering?: any
    ) {
        this.title = title;
        this.name = name;
        this.text = text;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
    }

    render(item: any): React.ReactNode {
        return (
            <a href={item[this.name ?? ""]} target={"_blank"}>{this.text}</a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.name ?? ""];
    }
}
