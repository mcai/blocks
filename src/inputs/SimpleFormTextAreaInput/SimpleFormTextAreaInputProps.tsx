import React from "react";

export interface SimpleFormTextAreaInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}
