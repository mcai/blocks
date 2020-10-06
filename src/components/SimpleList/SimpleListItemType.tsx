import {SimpleListItemValuesType} from "./SimpleListItemValuesType";
import React from "react";

export interface SimpleListItemType {
    name: string;

    description?: React.ReactNode;

    values: SimpleListItemValuesType;
}
