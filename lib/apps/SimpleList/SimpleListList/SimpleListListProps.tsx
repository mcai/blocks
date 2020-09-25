export interface SimpleListListProps {
    items?: { [name: string]: string }[];

    onUpdate: (index: number, key: string, value: string) => void;

    onRemove: (index: number) => void;
}
