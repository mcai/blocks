import React from "react";

export interface SimpleSelectFieldProps {
    title?: React.ReactNode;
    name?: string;

    options?: {
        key: string;
        value: string;
        text?: React.ReactNode;
    }[];

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
