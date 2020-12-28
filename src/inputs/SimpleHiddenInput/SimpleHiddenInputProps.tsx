import React, { CSSProperties } from "react";

export interface SimpleHiddenInputProps {
    name?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    className?: string;

    style?: CSSProperties;
}
