export interface SimpleListListProps {
    items?: { [name: string]: string }[];

    onRender?: (item: { [name: string]: string }) => void;

    onRemove: (index: number) => void;
}
