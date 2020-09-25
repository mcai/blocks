export interface SimpleListItemProps {
    item: { [name: string]: string };

    index: number;

    onUpdate: (index: number, key: string, value: string) => void;

    onRemove: (index: number) => void;
}
