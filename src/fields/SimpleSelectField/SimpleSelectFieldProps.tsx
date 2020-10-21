import React from "react";

export interface SimpleSelectFieldProps {
    title?: React.ReactNode;
    name?: string;

    options?: { value: string; text: string }[];

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
