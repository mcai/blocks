import {SimpleListItemValuesType} from "../SimpleListItemValuesType";

export interface SimpleListAddFormOption {
    name: string;

    getValuesFunc: () => SimpleListItemValuesType;
}
