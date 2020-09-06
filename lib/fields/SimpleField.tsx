import React from "react";

export interface SimpleField {
    title?: React.ReactNode
    name?: string;
    render: (item: any) => React.ReactNode | undefined
    renderAsText?: (item: any) => string | undefined
}
