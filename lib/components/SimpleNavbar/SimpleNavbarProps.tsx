import React from "react";

export interface SimpleNavbarProps {
    brand: { title?: React.ReactNode, href?: string }
    items: { title?: React.ReactNode, href?: string, active?: boolean }[]
}
