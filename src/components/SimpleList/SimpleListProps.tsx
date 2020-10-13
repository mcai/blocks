import { SimpleListItemType } from "./SimpleListItemType";
import { SimpleListAddFormOption } from "./SimpleListAddForm/SimpleListAddFormOption";

export interface SimpleListProps {
    initialItems?: SimpleListItemType[];

    addFormOptions?: SimpleListAddFormOption[];

    onUpdate?: (items?: SimpleListItemType[]) => void;

    readonly?: boolean;
}
