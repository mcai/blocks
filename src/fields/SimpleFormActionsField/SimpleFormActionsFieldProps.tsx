import React from "react";
import { SimpleActionsFieldType } from "../SimpleActionsFieldType";

export interface SimpleFormActionsFieldProps {
    title?: React.ReactNode;

    actions?: {
        text?: React.ReactNode;
        hrefFunc?: (values: any) => string;
        onClick?: (values: any) => void;
        type?: SimpleActionsFieldType;
        visible?: boolean | ((values: any) => boolean);
    }[];

    values?: any;

    ascendingOrdering?: any;
    descendingOrdering?: any;
}
