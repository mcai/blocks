import React from "react";

export interface SimpleFormFileInputProps {
    label?: React.ReactNode;

    name?: string;

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}
