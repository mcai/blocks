import React from "react";

export interface SimpleFormTextInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    password?: boolean;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}
