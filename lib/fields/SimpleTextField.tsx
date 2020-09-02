import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleTextField implements SimpleField {
    readonly title: React.ReactNode;
    readonly name: string;

    constructor(title: React.ReactNode, field: string) {
        this.title = title;
        this.name = field;
    }

    render(item: any): React.ReactNode {
        return item[this.name];
    }

    renderAsText(item: any): string | undefined {
        return item[this.name];
    }
}
