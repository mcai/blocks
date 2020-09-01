import React from "react";

export interface SimpleTableField<ItemT> {
    title: string
    render: (item: ItemT) => React.ReactNode
    renderAsText?: (item: ItemT) => string
}
