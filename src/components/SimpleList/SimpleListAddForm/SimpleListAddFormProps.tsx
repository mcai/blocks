import { SimpleListAddFormOption } from "./SimpleListAddFormOption";
import React from "react";

export interface SimpleListAddFormProps {
    options?: SimpleListAddFormOption[];

    onAdd: (row: { type: string; [name: string]: any }) => void;
}
