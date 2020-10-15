import { SimpleListItemType } from "../SimpleListItemType";

export interface SimpleListItemProps {
    item: SimpleListItemType;

    index: number;

    onUpdate?: (index: number, name: string, value: any) => void;

    onRemove?: (index: number) => void;

    readonly?: boolean;
}
