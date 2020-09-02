import React from "react";
import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";

export class SimpleUrlField implements SimpleTableField {
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
            <a href={item[this.field]} target={"_blank"}>{this.text}</a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.field];
    }
}
