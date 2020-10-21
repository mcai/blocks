import React from "react";

export interface SimpleTextAreaInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;
}
