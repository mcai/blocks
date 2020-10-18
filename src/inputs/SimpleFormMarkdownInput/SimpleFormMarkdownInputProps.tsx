import React from "react";

export interface SimpleFormMarkdownInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;

    height?: (values: any) => string | number;
}
