import {SimpleFormFieldType} from "./SimpleFormFieldType";
import React from "react";

export interface SimpleFormField {
    name: string;
    type: SimpleFormFieldType;
    title?: React.ReactNode;
    value?: string | number | boolean;
    placeholder?: string;
    hint?: React.ReactNode;
}
