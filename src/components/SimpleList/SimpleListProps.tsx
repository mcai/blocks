import { SimpleListItemType } from "./SimpleListItemType";
import { SimpleListAddFormOption } from "./SimpleListAddForm/SimpleListAddFormOption";

export interface SimpleListProps {
    items?: SimpleListItemType[];

    addFormOptions?: SimpleListAddFormOption[];

    onUpdate: (items?: SimpleListItemType[]) => void;

    readonly?: boolean;
}
