import { SimpleListItemFieldsType } from "./SimpleListItemFieldsType";
import React from "react";

export interface SimpleListItemType {
    name: string;

    description?: React.ReactNode;

    fields: SimpleListItemFieldsType;
}
