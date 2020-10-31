import React from "react";

export interface SimpleSearchInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    inline?: boolean;
}
