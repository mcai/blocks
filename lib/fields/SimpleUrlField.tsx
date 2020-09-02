import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleUrlField implements SimpleField {
    title: React.ReactNode;
    name: string;
    text: React.ReactNode;

    constructor(title: React.ReactNode, field: string, text: React.ReactNode) {
        this.title = title;
        this.name = field;
        this.text = text;
    }

    render(item: any): React.ReactNode {
        return (
            <a href={item[this.name]} target={"_blank"}>{this.text}</a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.name];
    }
}
