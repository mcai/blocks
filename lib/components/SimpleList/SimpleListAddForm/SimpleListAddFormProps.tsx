import {SimpleListItemType} from "../SimpleListItemType";

export interface SimpleListAddFormProps {
    getItemFuncs?: (() => SimpleListItemType)[];

    onAdd: (item: SimpleListItemType) => void;
}
