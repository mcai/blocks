import {SimpleField} from "./SimpleField";
import React from "react";

export class SimpleFuncField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    renderFunc?: (item: any) => React.ReactNode;
    renderAsTextFunc?: (item: any) => string | undefined;

    constructor(
        title: React.ReactNode,
        name: string,
        renderFunc: (value: any) => React.ReactNode,
        renderAsTextFunc: (value: any) => (string | undefined)
    ) {
        this.title = title;
        this.name = name;
        this.renderFunc = renderFunc;
        this.renderAsTextFunc = renderAsTextFunc;
    }

    render(item: any): React.ReactNode {
        return this.renderFunc?.(item);
    }

    renderAsText(item: any): string | undefined {
        return this.renderAsTextFunc?.(item);
    }
}
