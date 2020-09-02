import {SimpleField} from "./SimpleField";
import React from "react";
import {Image} from "react-bootstrap";

export class SimpleImageField implements SimpleField {
    readonly title: React.ReactNode;
    readonly name: string;
    readonly text: string;

    constructor(title: React.ReactNode, field: string, text: string) {
        this.title = title;
        this.name = field;
        this.text = text;
    }

    render(item: any): React.ReactNode {
        let src = item[this.name];
        return (
            <a href={src}>
                <Image src={src} title={this.text} thumbnail/>
            </a>
        );
    }

    renderAsText(item: any): string | undefined {
        return item[this.name];
    }
}
