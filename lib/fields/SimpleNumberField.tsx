import React from "react";
import {SimpleField} from "./SimpleField";

export class SimpleNumberField implements SimpleField {
    title: React.ReactNode;
    name: string;
    fractionDigits: number

    constructor(title: React.ReactNode, field: string, fractionDigits: number = 2) {
        this.title = title;
        this.name = field;
        this.fractionDigits = fractionDigits;
    }

    render(item: any): React.ReactNode {
        return (item[this.name] as number).toFixed(this.fractionDigits);
    }

    renderAsText(item: any): string | undefined {
        return (item[this.name] as number).toFixed(this.fractionDigits);
    }
}
