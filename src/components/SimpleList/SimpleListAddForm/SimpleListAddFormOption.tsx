import {SimpleListItemValuesType} from "../SimpleListItemValuesType";
import React from "react";

export interface SimpleListAddFormOption {
    name: string;

    description?: React.ReactNode;

    descriptionAsText?: string;

    getValuesFunc: () => SimpleListItemValuesType;
}
