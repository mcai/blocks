import React, { CSSProperties } from "react";

export interface SimpleSearchInputProps {
    name?: string;

    placeholder?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    className?: string;

    style?: CSSProperties;
}
