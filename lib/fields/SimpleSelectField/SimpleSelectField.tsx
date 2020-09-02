import React from "react";
import {SimpleTableField} from "../../components/SimpleTable/SimpleTableField";
import Enumerable from "linq";

export class SimpleSelectField<ItemT> implements SimpleTableField<ItemT> {
    title: React.ReactNode;
    field: string;
    options: {value: string, text: string}[];

    constructor(title: React.ReactNode, field: string, options: {value: string, text: string}[]) {
        this.title = title;
        this.field = field;
        this.options = options;
    }

    render(item: ItemT): React.ReactNode {
        // @ts-ignore
        let value = item[this.field];
        return Enumerable.from(this.options).firstOrDefault(option => option.value == value)?.text;
    }

    renderAsText(item: ItemT): string | undefined {
        // @ts-ignore
        let value = item[this.field];
        return Enumerable.from(this.options).firstOrDefault(option => option.value == value)?.text;
    }
}

