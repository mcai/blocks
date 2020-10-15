import { SimpleListAddFormOption } from "./SimpleListAddFormOption";
import React from "react";

export interface SimpleListAddFormProps {
    options?: SimpleListAddFormOption[];

    onAdd: (row: { id: any; [name: string]: any }) => void;
}
