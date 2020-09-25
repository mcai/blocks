export interface SimpleListProps {
    initialItems?: {[name: string]: string}[];

    onRender?: (item: { [name: string]: string }) => void;
}
