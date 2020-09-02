import React from "react";
import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";

export class SimpleBooleanField<ItemT> implements SimpleTableField<ItemT> {
    title: React.ReactNode;
    field: string;

    constructor(title: React.ReactNode, field: string) {
        this.title = title;
        this.field = field;
    }

    render(item: ItemT): React.ReactNode {
        // @ts-ignore
        return item[this.field] ? "是" : "否";
    }

    renderAsText(item: ItemT): string | undefined {
        // @ts-ignore
        return item[this.field] ? "是" : "否";
    }
}
