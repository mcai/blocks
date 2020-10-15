import React from "react";
import { SimpleListAddFormOption } from "../../components/SimpleList/SimpleListAddForm/SimpleListAddFormOption";

export interface SimpleFormListInputProps {
    label?: React.ReactNode;

    name?: string;

    addFormOptions?: SimpleListAddFormOption[];

    values?: { [name: string]: any };

    onUpdate?: (name: string, value: any) => void;

    readOnly?: boolean;
}
