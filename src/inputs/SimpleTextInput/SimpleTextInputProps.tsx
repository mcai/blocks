import React, { CSSProperties } from "react";

export interface SimpleTextInputProps {
    name?: string;

    placeholder?: string;

    password?: (values: any) => boolean;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;

    className?: string;

    style?: CSSProperties;
}
