import React, { CSSProperties } from "react";

export interface SimpleSelectInputProps {
    name?: string;

    values?: any;

    options?: {
        key: string;
        value: string;
        text?: React.ReactNode;
    }[];

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    className?: string;

    style?: CSSProperties;
}
