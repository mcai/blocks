import React from "react";

export interface SimpleTextFieldProps {
    name: string;
    title?: React.ReactNode;
    value?: string;
    placeholder?: string;
    hint?: React.ReactNode;
    password?: boolean
}
