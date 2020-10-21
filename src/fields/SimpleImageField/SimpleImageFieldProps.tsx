import React from "react";

export interface SimpleImageFieldProps {
    title?: React.ReactNode;
    name?: string;
    text?: string;

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
