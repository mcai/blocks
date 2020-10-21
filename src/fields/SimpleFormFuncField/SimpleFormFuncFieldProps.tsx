import React from "react";

export interface SimpleFormFuncFieldProps {
    title?: React.ReactNode;
    name?: string;
    renderFunc?: (item: any) => React.ReactNode;

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
