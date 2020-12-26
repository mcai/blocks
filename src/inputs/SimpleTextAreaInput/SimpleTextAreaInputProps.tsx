import React, { CSSProperties } from "react";

export interface SimpleTextAreaInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    style?: CSSProperties;
}
