import React from "react";

export interface SimpleTabsProps {
    options: {
        key: string | number;
        text?: React.ReactNode;
        value?: any;
    }[];

    value?: any;

    onChange?: (value?: any) => void;
}
