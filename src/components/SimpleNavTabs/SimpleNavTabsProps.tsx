import React from "react";

export interface SimpleNavTabsProps {
    options: {
        text?: React.ReactNode,
        value?: any
    }[];

    value?: any;

    onChange?: (value?: any) => void;
}
