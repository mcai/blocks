import { SimpleListOption } from "../SimpleListOption";
import React from "react";

export interface SimpleListToolbarProps {
    options?: SimpleListOption[];

    onChange?: (text?: string) => Promise<void>;

    onAdd: (row: { id: any; [name: string]: any }) => void;

    useSearch?: boolean;
}
