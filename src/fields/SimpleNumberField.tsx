import React from "react";
import { SimpleField } from "./SimpleField";

export class SimpleNumberField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    fractionDigits?: number;

    ascendingOrdering?: any;
    descendingOrdering?: any;

    visible?: boolean;

    constructor(
        title?: React.ReactNode,
        field?: string,
        fractionDigits?: number,
        ascendingOrdering?: any,
        descendingOrdering?: any,
        visible?: boolean,
    ) {
        this.title = title;
        this.name = field;
        this.fractionDigits = fractionDigits;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
        this.visible = visible;
    }

    render(item: any): React.ReactNode {
        return (item[this.name ?? ""] as number)?.toFixed(this.fractionDigits);
    }

    renderAsText(item: any): string | undefined {
        return (item[this.name ?? ""] as number)?.toFixed(this.fractionDigits);
    }
}
