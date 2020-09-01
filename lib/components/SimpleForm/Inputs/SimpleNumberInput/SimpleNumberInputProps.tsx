import React from "react";

export interface SimpleNumberInputProps {
    name: string;
    title?: React.ReactNode;
    value?: number;
    min?: number;
    max?: number;
    placeholder?: string;
    hint?: React.ReactNode;
}
