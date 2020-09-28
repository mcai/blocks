import React from "react";
import {SimpleField} from "./SimpleField";
import {SimpleFormatting} from "../utils/SimpleFormatting";

export class SimpleDateTimeField implements SimpleField {
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
        return SimpleFormatting.toFormattedDateTimeString(item[this.name ?? ""]);
    }

    renderAsText(item: any): string | undefined {
        return SimpleFormatting.toFormattedDateTimeString(item[this.name ?? ""]);
    }
}
