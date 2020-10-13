import React from "react";

export interface SimpleTabsProps {
    options: {
        key: string;
        text?: React.ReactNode;
        value?: any;
    }[];

    value?: any;

    onChange?: (value?: any) => void;
}
