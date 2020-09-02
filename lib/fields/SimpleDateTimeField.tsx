import React from "react";
import {SimpleField} from "./SimpleField";
import {SimpleFormatting} from "../utils/SimpleFormatting";

export class SimpleDateTimeField implements SimpleField {
    readonly title: React.ReactNode;
    readonly name: string;

    constructor(title: React.ReactNode, field: string) {
        this.title = title;
        this.name = field;
    }

    render(item: any): React.ReactNode {
        return SimpleFormatting.toFormattedDateTimeString(item[this.name]);
    }

    renderAsText(item: any): string | undefined {
        return SimpleFormatting.toFormattedDateTimeString(item[this.name]);
    }
}
