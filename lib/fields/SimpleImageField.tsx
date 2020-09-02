import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";
import React from "react";
import {Image} from "react-bootstrap";

export class SimpleImageField implements SimpleTableField {
    title: React.ReactNode;
    field: string;
    text: string;

    constructor(title: React.ReactNode, field: string, text: string) {
        this.title = title;
        this.field = field;
        this.text = text;
    }

    render(item: any): React.ReactNode {
        let src = item[this.field];
        return (
            <a href={src}>
                <Image src={src} title={this.text} thumbnail/>
            </a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.field];
    }
}
