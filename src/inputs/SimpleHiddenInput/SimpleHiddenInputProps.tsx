import React from "react";

export interface SimpleHiddenInputProps {
    name?: string;

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;
}
