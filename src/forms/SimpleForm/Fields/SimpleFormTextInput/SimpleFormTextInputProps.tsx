import React from "react";

export interface SimpleFormTextInputProps {
    label: React.ReactNode;

    name: string;

    placeholder?: string;

    password?: boolean;

    values?: { [name: string]: string };

    onUpdate?: (name: string, value: string) => void;
}
