import React from "react";

export interface SimpleFormTextAreaInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;
}
