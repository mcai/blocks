export interface SimpleListItemProps {
    initialItem: { [name: string]: string };

    index: number;

    onUpdate: (index: number, key: string, value: string) => void;

    onRemove: (index: number) => void;
}
