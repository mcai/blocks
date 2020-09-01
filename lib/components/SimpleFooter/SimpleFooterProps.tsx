import React from "react";

export interface SimpleFooterProps {
    brand: { title: string, href: string }
    extra?: React.ReactNode
}
