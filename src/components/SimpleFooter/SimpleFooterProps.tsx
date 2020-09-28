import React from "react";

export interface SimpleFooterProps {
    brand: { title?: React.ReactNode, href: string }
    extra?: React.ReactNode
}
