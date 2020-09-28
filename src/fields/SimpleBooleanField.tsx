import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleBooleanField implements SimpleField {
    title?: React.ReactNode;
    name?: string;

    ascendingOrdering?: any
    descendingOrdering?: any

    constructor(
        title?: React.ReactNode,
        name?: string,
        ascendingOrdering?: any,
        descendingOrdering?: any
    ) {
        this.title = title;
        this.name = name;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
    }

    render(item: any): React.ReactNode {
        return item[this.name ?? ""] ? "是" : "否";
    }

    renderAsText(item: any): string | undefined {
        return item[this.name ?? ""] ? "是" : "否";
    }
}
