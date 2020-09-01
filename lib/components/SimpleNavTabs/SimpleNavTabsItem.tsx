import React from "react";

export interface SimpleNavTabsItem {
    href?: string
    text?: React.ReactNode
    badge?: React.ReactNode
    onClick: () => void
    active: boolean
}
