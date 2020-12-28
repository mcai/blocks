import React, { CSSProperties } from "react";

export interface SimpleTextAreaInputProps {
    name?: string;

    placeholder?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    className?: string;

    style?: CSSProperties;
}
