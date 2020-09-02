import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";
import React from "react";
import {Image} from "react-bootstrap";

export class SimpleImageField<ItemT> implements SimpleTableField<ItemT> {
    title: React.ReactNode;
    field: string;
    text: string;

    constructor(title: React.ReactNode, field: string, text: string) {
        this.title = title;
        this.field = field;
        this.text = text;
    }

    render(item: ItemT): React.ReactNode {
        // @ts-ignore
        let src = item[this.field];
        return (
            <a href={src}>
                <Image src={src} title={this.text} thumbnail/>
            </a>
        );
    }

    renderAsText(item: ItemT): string | undefined {
        // @ts-ignore
        return item[this.field];
    }
}
