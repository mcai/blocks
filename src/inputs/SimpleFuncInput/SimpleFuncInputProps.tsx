import React, { CSSProperties } from "react";

export interface SimpleFuncInputProps {
    name?: string;

    placeholder?: string;

    values?: { [name: string]: any };

    getValueFunc: (values?: { [name: string]: any }) => any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    className?: string;

    style?: CSSProperties;
}
