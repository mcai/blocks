import React from "react";

export interface SimpleTextInputProps {
    name: string;
    title?: React.ReactNode;
    value?: string;
    placeholder?: string;
    hint?: React.ReactNode;
    password?: boolean
}
