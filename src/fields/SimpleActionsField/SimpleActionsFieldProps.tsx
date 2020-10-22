import React from "react";
import { SimpleActionsFieldType } from "./SimpleActionsFieldType";

export interface SimpleActionsFieldProps {
    title?: React.ReactNode;

    actions?: {
        key: string;
        text?: React.ReactNode;
        hrefFunc?: (values: any) => string;
        onClick?: (values: any) => void;
        type?: SimpleActionsFieldType;
        visible?: boolean | ((values: any) => boolean);
    }[];

    values?: any;
}
