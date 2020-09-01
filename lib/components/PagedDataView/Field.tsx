import React from "react";

export interface Field<ItemT> {
    title: string
    render: (item: ItemT) => React.ReactNode
    renderAsText?: (item: ItemT) => string
}
