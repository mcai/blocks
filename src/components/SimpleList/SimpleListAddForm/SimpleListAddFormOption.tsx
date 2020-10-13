import { SimpleListItemFieldsType } from "../SimpleListItemFieldsType";
import React from "react";

export interface SimpleListAddFormOption {
    name: string;

    description?: React.ReactNode;

    descriptionAsText?: string;

    fields: SimpleListItemFieldsType;
}
