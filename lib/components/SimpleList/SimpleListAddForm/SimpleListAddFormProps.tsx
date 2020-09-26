import {SimpleListItemType} from "../SimpleListItemType";

export interface SimpleListAddFormProps {
    items?: SimpleListItemType[];

    onAdd: (item: SimpleListItemType) => void;
}
