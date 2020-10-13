import React from "react";

export interface SimpleButtonBarProps {
    items: {
        key: string;
        title?: React.ReactNode;
        href?: string;
        onClick?: () => void;
    }[];
}
