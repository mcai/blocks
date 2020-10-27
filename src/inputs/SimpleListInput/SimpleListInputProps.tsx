import React from "react";
import { SimpleListOption } from "../../components/SimpleList/SimpleListOption";

export interface SimpleListInputProps {
    name?: string;

    options?: SimpleListOption[];

    values?: any;

    onUpdate?: (name: string, value: any) => void;

    visible?: (values: any) => boolean;

    readOnly?: (values: any) => boolean;
}
