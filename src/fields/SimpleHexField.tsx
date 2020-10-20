import React from "react";
import { SimpleField } from "./SimpleField";

export class SimpleHexField implements SimpleField {
    title?: React.ReactNode;
    name?: string;

    ascendingOrdering?: any;
    descendingOrdering?: any;

    visible?: boolean;

    constructor(
        title?: React.ReactNode,
        field?: string,
        ascendingOrdering?: any,
        descendingOrdering?: any,
        visible?: boolean,
    ) {
        this.title = title;
        this.name = field;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
        this.visible = visible;
    }

    render(item: any): React.ReactNode {
        return item[this.name ?? ""]; // TODO
    }

    renderAsText(item: any): string | undefined {
        return item[this.name ?? ""]; // TODO
    }
}
