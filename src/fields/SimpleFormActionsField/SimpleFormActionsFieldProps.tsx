import React from "react";
import { SimpleFormActionsFieldType } from "./SimpleFormActionsFieldType";

export interface SimpleFormActionsFieldProps {
    title?: React.ReactNode;

    actions?: {
        text?: React.ReactNode;
        hrefFunc?: (values: any) => string;
        onClick?: (values: any) => void;
        type?: SimpleFormActionsFieldType;
        visible?: boolean | ((values: any) => boolean);
    }[];

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
