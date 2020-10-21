import React from "react";

export interface SimpleFormFuncFieldProps {
    title?: React.ReactNode;
    renderFunc?: (item: any) => React.ReactNode;

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
