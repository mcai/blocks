import React from "react";

export interface SimpleButtonBarProps {
    items: { title?: React.ReactNode, href?: string, onClick?: () => void }[]
}
