import React from "react";

export interface SimpleTableField<ItemT> {
    title?: React.ReactNode
    render: (item: ItemT) => React.ReactNode | undefined
    renderAsText?: (item: ItemT) => string | undefined
}
