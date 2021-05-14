import { SimpleListOption } from "./SimpleListOption";

export interface SimpleListProps {
    options?: SimpleListOption[];

    rows?: { id: any; [name: string]: any }[];

    onUpdate: (rows?: { id: any; [name: string]: any }[]) => void;

    readOnly?: boolean;

    useSearch?: boolean;
}
