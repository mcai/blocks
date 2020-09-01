import React from "react";

export interface SimpleNumberFieldProps {
    name: string;
    title?: React.ReactNode;
    value?: number;
    min?: number;
    max?: number;
    placeholder?: string;
    hint?: React.ReactNode;
}
