import React from "react";

export interface SimpleFormSelectFieldProps {
    title?: React.ReactNode;
    name?: string;

    options?: { value: string; text: string }[];

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
