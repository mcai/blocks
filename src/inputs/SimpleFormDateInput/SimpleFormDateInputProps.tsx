import React from "react";

export interface SimpleFormDateInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;
}
