export interface SimpleListItemProps {
    item: any;

    index: number;

    onRemove: (index: number) => void;
}
