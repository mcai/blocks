import React from "react";
import {SimpleField} from "./SimpleField";
import Enumerable from "linq";

export class SimpleSelectField implements SimpleField {
    readonly title: React.ReactNode;
    readonly name: string;
    readonly options: {value: string, text: string}[];

    constructor(title: React.ReactNode, field: string, options: {value: string, text: string}[]) {
        this.title = title;
        this.name = field;
        this.options = options;
    }

    render(item: any): React.ReactNode {
        let value = item[this.name];
        return Enumerable.from(this.options).firstOrDefault(option => option.value == value)?.text;
    }

    renderAsText(item: any): string | undefined {
        let value = item[this.name];
        return Enumerable.from(this.options).firstOrDefault(option => option.value == value)?.text;
    }
}

