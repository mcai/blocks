import React from "react";

export interface SimpleFormTextInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    password?: (values: any) => boolean;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;
}
