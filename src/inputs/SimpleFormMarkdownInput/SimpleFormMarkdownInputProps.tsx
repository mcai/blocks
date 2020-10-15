import React from "react";

export interface SimpleFormMarkdownInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;

    height?: string | number;
}
