import React from "react";
import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";

export class SimpleNumberField<ItemT> implements SimpleTableField<ItemT> {
    title: React.ReactNode;
    field: string;
    fractionDigits: number

    constructor(title: React.ReactNode, field: string, fractionDigits: number = 2) {
        this.title = title;
        this.field = field;
        this.fractionDigits = fractionDigits;
    }

    render(item: ItemT): React.ReactNode {
        // @ts-ignore
        return (item[this.field] as number).toFixed(this.fractionDigits);
    }

    renderAsText(item: ItemT): string | undefined {
        // @ts-ignore
        return (item[this.field] as number).toFixed(this.fractionDigits);
    }
}
