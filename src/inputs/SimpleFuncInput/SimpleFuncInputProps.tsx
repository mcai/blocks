import React from "react";

export interface SimpleFuncInputProps {
    label?: React.ReactNode;

    name?: string;

    placeholder?: string;

    values?: { [name: string]: any };

    getValueFunc: (values?: { [name: string]: any }) => any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    inline?: boolean;
}
