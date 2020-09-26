import {SimpleListItemValuesType} from "../SimpleListItemValuesType";

export interface SimpleListAddFormOption {
    name: string;

    description: string;

    getValuesFunc: () => SimpleListItemValuesType;
}
