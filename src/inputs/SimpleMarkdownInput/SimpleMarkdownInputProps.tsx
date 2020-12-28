import React, { CSSProperties } from "react";

export interface SimpleMarkdownInputProps {
    name?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    height?: (values: any) => string | number;

    className?: string;

    style?: CSSProperties;
}
