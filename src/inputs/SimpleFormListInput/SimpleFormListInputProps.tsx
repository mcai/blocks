import React from "react";
import { SimpleListOption } from "../../components/SimpleList/SimpleListOption";

export interface SimpleFormListInputProps {
    name?: string;

    options?: SimpleListOption[];

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}
