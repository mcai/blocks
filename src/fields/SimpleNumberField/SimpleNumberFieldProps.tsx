import React from "react";

export interface SimpleNumberFieldProps {
    title?: React.ReactNode;
    name?: string;
    fractionDigits?: number;

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
