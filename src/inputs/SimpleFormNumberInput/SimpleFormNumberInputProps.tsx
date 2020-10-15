import React from "react";

export interface SimpleFormNumberInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}
