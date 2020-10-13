import { SimpleListItemType } from "../SimpleListItemType";
import { SimpleListAddFormOption } from "./SimpleListAddFormOption";

export interface SimpleListAddFormProps {
    options?: SimpleListAddFormOption[];

    onAdd: (item: SimpleListItemType) => void;
}
