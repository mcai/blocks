import React from "react";

export interface SimpleTextInputProps {
    label: React.ReactNode;

    name: string;

    placeholder?: string;

    password?: boolean;
}
