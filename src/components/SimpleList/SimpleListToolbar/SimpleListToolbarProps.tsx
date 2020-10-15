import { SimpleListOption } from "../SimpleListOption";
import React from "react";

export interface SimpleListToolbarProps {
    options?: SimpleListOption[];

    onAdd: (row: { id: any; [name: string]: any }) => void;
}
