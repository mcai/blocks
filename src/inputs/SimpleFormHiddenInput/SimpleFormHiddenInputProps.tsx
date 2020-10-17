import React from "react";

export interface SimpleFormHiddenInputProps {
    name?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;
}
