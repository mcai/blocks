import React from "react";

export interface SimpleFileInputProps {
    label?: React.ReactNode;

    name?: string;

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    readOnly?: (values: any) => boolean;
}
