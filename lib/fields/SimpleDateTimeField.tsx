import React from "react";
import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";
import {Formatting} from "../utils/Formatting";

export class SimpleDateTimeField<ItemT> implements SimpleTableField<ItemT> {
    title: React.ReactNode;
    field: string;

    constructor(title: React.ReactNode, field: string) {
        this.title = title;
        this.field = field;
    }

    render(item: ItemT): React.ReactNode {
        // @ts-ignore
        return Formatting.toFormattedDateTimeString(item[this.field]);
    }

    renderAsText(item: ItemT): string | undefined {
        // @ts-ignore
        return Formatting.toFormattedDateTimeString(item[this.field]);
    }
}
