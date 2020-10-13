import React from "react";
import {SimpleField} from "./SimpleField";
import Enumerable from "linq";

export class SimpleSelectField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    options?: {value: string, text: string}[];

    ascendingOrdering?: any;
    descendingOrdering?: any;

    visible?: boolean;

    constructor(
        title?: React.ReactNode,
        name?: string,
        options?: {value: string, text: string}[],
        ascendingOrdering?: any,
        descendingOrdering?: any,
        visible?: boolean
    ) {
        this.title = title;
        this.name = name;
        this.options = options;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
        this.visible = visible;
    }

    render(item: any): React.ReactNode {
        const value = item[this.name ?? ""];
        return Enumerable.from(this.options ?? []).firstOrDefault(option => option.value == value)?.text;
    }

    renderAsText(item: any): string | undefined {
        const value = item[this.name ?? ""];
        return Enumerable.from(this.options ?? []).firstOrDefault(option => option.value == value)?.text;
    }
}

