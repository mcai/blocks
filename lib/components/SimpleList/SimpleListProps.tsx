import {SimpleListItemType} from "./SimpleListItemType";

export interface SimpleListProps {
    initialItems?: SimpleListItemType[];

    addFormGetItemFuncs?: (() => SimpleListItemType)[];
}
