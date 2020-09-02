import React from "react";

export interface SimpleNavbarProps {
    brand: { title?: React.ReactNode, href?: string }
    items: { key: string, title?: React.ReactNode, href?: string, active?: boolean }[]
}
