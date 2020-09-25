export interface SimpleListItemProps {
    item: { [name: string]: string };

    index: number;

    onRender?: (item: { [name: string]: string }) => void;

    onRemove: (index: number) => void;
}
