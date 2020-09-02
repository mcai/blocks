import React from "react";
import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";

export class SimpleFileField<ItemT> implements SimpleTableField<ItemT> {
    title: React.ReactNode;
    field: string;
    text: React.ReactNode;

    constructor(title: React.ReactNode, field: string, text: React.ReactNode) {
        this.title = title;
        this.field = field;
        this.text = text;
    }

    render(item: ItemT): React.ReactNode {
        return (
            // @ts-ignore
            <a href={item[this.field]}>{this.text}</a>
        );
    }

    renderAsText(item: ItemT): string | undefined {
        // @ts-ignore
        return item[this.field];
    }
}
