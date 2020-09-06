import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleFileField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    text?: React.ReactNode;

    constructor(title?: React.ReactNode, name?: string, text?: React.ReactNode) {
        this.title = title;
        this.name = name;
        this.text = text;
    }

    render(item: any): React.ReactNode {
        return (
            <a href={item[this.name ?? ""]}>{this.text}</a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.name ?? ""];
    }
}
