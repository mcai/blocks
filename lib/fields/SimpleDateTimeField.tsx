import React from "react";
import {SimpleField} from "./SimpleField";
import {Formatting} from "../utils/Formatting";

export class SimpleDateTimeField implements SimpleField {
    title: React.ReactNode;
    name: string;

    constructor(title: React.ReactNode, field: string) {
        this.title = title;
        this.name = field;
    }

    render(item: any): React.ReactNode {
        return Formatting.toFormattedDateTimeString(item[this.name]);
    }

    renderAsText(item: any): string | undefined {
        return Formatting.toFormattedDateTimeString(item[this.name]);
    }
}
