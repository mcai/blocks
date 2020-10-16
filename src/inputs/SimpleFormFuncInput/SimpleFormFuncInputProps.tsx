import React from "react";

export interface SimpleFormFuncInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    values?: { [name: string]: any };

    getValueFunc: (values?: { [name: string]: any }) => any;

    onUpdate?: (name: string, value: any) => void;
}
