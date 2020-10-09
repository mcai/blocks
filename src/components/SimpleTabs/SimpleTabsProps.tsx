import React from "react";

export interface SimpleTabsProps {
    options: {
        text?: React.ReactNode,
        value?: any
    }[];

    value?: any;

    onChange?: (value?: any) => void;
}
