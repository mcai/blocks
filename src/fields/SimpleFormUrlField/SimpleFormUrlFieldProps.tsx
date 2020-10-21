import React from "react";

export interface SimpleFormUrlFieldProps {
    title?: React.ReactNode;
    name?: string;
    text?: React.ReactNode;

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
