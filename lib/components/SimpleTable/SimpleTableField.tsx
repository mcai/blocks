import React from "react";

export interface SimpleTableField {
    title?: React.ReactNode
    render: (item: any) => React.ReactNode | undefined
    renderAsText?: (item: any) => string | undefined
}
