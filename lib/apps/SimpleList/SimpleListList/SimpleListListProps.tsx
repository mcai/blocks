import {SimpleListItemType} from "../SimpleListItemType";

export interface SimpleListListProps {
    items?: SimpleListItemType[];

    onUpdate: (index: number, key: string, value: string) => void;

    onRemove: (index: number) => void;
}
