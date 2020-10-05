import React from "react";

export interface SimpleFormSelectInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: { [name: string]: any };

    options: { value: string, text?: React.ReactNode }[];

    onUpdate?: (name: string, value: any) => void;

    readonly?: boolean;
}
