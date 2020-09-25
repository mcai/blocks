export interface SimpleListListProps {
    items?: { [name: string]: string }[];

    onUpdate: (index: number, item: { [name: string]: string }) => void;

    onRemove: (index: number) => void;
}
