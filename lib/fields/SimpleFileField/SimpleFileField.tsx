import React from "react";
import {SimpleTableField} from "../../components/SimpleTable/SimpleTableField";

export class SimpleFileField<ItemT> implements SimpleTableField<ItemT> {
    title: React.ReactNode;
    text: React.ReactNode;
    field: string;

    constructor(title: React.ReactNode, text: React.ReactNode, field: string) {
        this.title = title;
        this.text = text;
        this.field = field;
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
