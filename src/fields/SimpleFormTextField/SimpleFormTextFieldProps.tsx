import React from "react";

export interface SimpleFormTextFieldProps {
    title?: React.ReactNode;
    name?: string;

    values?: any;

    renderAsText?: (item: any) => string | undefined;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
