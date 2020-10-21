import React from "react";

export interface SimpleFuncFieldProps {
    title?: React.ReactNode;
    renderFunc?: (item: any) => React.ReactNode;

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
