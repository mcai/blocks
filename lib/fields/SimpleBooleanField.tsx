import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleBooleanField implements SimpleField {
    title: React.ReactNode;
    field: string;

    constructor(title: React.ReactNode, field: string) {
        this.title = title;
        this.field = field;
    }

    render(item: any): React.ReactNode {
        return item[this.field] ? "是" : "否";
    }

    renderAsText(item: any): string | undefined {
        return item[this.field] ? "是" : "否";
    }
}
