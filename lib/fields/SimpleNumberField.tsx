import React from "react";
import {SimpleTableField} from "../components/SimpleTable/SimpleTableField";

export class SimpleNumberField implements SimpleTableField {
    title: React.ReactNode;
    field: string;
    fractionDigits: number

    constructor(title: React.ReactNode, field: string, fractionDigits: number = 2) {
        this.title = title;
        this.field = field;
        this.fractionDigits = fractionDigits;
    }

    render(item: any): React.ReactNode {
        return (item[this.field] as number).toFixed(this.fractionDigits);
    }

    renderAsText(item: any): string | undefined {
        return (item[this.field] as number).toFixed(this.fractionDigits);
    }
}
