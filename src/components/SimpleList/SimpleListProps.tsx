import { SimpleListItemType } from "./SimpleListItemType";
import { SimpleListAddFormOption } from "./SimpleListAddForm/SimpleListAddFormOption";

export interface SimpleListProps {
    addFormOptions?: SimpleListAddFormOption[];

    items?: SimpleListItemType[];

    onUpdate: (items?: SimpleListItemType[]) => void;

    readonly?: boolean;
}
