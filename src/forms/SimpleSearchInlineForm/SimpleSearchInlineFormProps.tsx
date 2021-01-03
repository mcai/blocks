import React from "react";

export interface SimpleSearchInlineFormProps {
    name?: string;

    label?: string;

    placeholder?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;
}
