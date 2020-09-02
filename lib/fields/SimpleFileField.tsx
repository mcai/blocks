import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleFileField implements SimpleField {
    title: React.ReactNode;
    field: string;
    text: React.ReactNode;

    constructor(title: React.ReactNode, field: string, text: React.ReactNode) {
        this.title = title;
        this.field = field;
        this.text = text;
    }

    render(item: any): React.ReactNode {
        return (
            <a href={item[this.field]}>{this.text}</a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.field];
    }
}
