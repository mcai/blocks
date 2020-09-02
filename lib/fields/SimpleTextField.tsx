import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleTextField implements SimpleField {
    title: React.ReactNode;
    field: string;

    constructor(title: React.ReactNode, field: string) {
        this.title = title;
        this.field = field;
    }

    render(item: any): React.ReactNode {
        return item[this.field];
    }

    renderAsText(item: any): string | undefined {
        return item[this.field];
    }
}
