import React from "react";

export interface SimpleSelectInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: any;

    options?: {
        key: string;
        value: string;
        text?: React.ReactNode;
    }[];

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;

    inline?: boolean;
}