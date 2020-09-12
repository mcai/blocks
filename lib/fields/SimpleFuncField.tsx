import {SimpleField} from "./SimpleField";
import React from "react";

export class SimpleFuncField implements SimpleField {
    title?: React.ReactNode;
    name?: string;
    renderFunc?: (item: any) => React.ReactNode;
    renderAsTextFunc?: (item: any) => string | undefined;

    ascendingOrdering?: any
    descendingOrdering?: any

    constructor(
        title: React.ReactNode,
        name: string,
        renderFunc: (value: any) => React.ReactNode,
        renderAsTextFunc: (value: any) => (string | undefined),
        ascendingOrdering?: any,
        descendingOrdering?: any
    ) {
        this.title = title;
        this.name = name;
        this.renderFunc = renderFunc;
        this.renderAsTextFunc = renderAsTextFunc;
        this.ascendingOrdering = ascendingOrdering;
        this.descendingOrdering = descendingOrdering;
    }

    render(item: any): React.ReactNode {
        return this.renderFunc?.(item);
    }

    renderAsText(item: any): string | undefined {
        return this.renderAsTextFunc?.(item);
    }
}
