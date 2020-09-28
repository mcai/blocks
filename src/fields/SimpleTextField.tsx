import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleTextField implements SimpleField {
    title?: React.ReactNode;
    name?: string;

    ascendingOrdering?: any
    descendingOrdering?: any

    constructor(
        title?: React.ReactNode,
        field?: string,
        ascendingOrdering?: any,
        descendingOrdering?: any
    ) {
        this.title = title;
        this.name = field;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
    }

    render(item: any): React.ReactNode {
        return item[this.name ?? ""];
    }

    renderAsText(item: any): string | undefined {
        return item[this.name ?? ""];
    }
}