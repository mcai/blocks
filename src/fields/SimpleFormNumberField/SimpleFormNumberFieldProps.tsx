import React from "react";

export interface SimpleFormNumberFieldProps {
    title?: React.ReactNode;
    name?: string;
    fractionDigits?: number;

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
