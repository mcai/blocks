import { SimpleListOption } from "./SimpleListOption";

export interface SimpleListProps {
    getOptions?: (text?: string) => Promise<SimpleListOption[] | undefined>;

    rows?: { id: any; [name: string]: any }[];

    onUpdate: (rows?: { id: any; [name: string]: any }[]) => void;

    readOnly?: boolean;

    useSearch?: boolean;
}
