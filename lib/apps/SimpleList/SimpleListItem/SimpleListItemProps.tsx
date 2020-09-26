import {SimpleListItemType} from "../SimpleListItemType";

export interface SimpleListItemProps {
    item: SimpleListItemType;

    index: number;

    onUpdate: (index: number, key: string, value: string) => void;

    onRemove: (index: number) => void;
}
