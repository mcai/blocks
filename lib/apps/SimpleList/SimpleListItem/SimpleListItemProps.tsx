export interface SimpleListItemProps {
    initialItem: { [name: string]: string };

    index: number;

    onUpdate: (index: number, item: { [name: string]: string }) => void;

    onRemove: (index: number) => void;
}
