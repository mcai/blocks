import React from "react";

export interface SimpleFormBooleanInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readonly?: boolean;
}
