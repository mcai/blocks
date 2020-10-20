import React from "react";
import { SimpleField } from "./SimpleField";
import { SimpleFormatting } from "../utils/SimpleFormatting";

export class SimpleDateField implements SimpleField {
    title?: React.ReactNode;
    name?: string;

    ascendingOrdering?: any;
    descendingOrdering?: any;

    visible?: boolean;

    constructor(
        title?: React.ReactNode,
        name?: string,
        ascendingOrdering?: any,
        descendingOrdering?: any,
        visible?: boolean,
    ) {
        this.title = title;
        this.name = name;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
        this.visible = visible;
    }

    render(item: any): React.ReactNode {
        return SimpleFormatting.toFormattedDateString(item[this.name ?? ""]);
    }

    renderAsText(item: any): string | undefined {
        return SimpleFormatting.toFormattedDateString(item[this.name ?? ""]);
    }
}
