import { SimpleListAddFormOption } from "./SimpleListAddForm/SimpleListAddFormOption";

export interface SimpleListProps {
    addFormOptions?: SimpleListAddFormOption[];

    rows?: { id: any; [name: string]: any }[];

    onUpdate: (rows?: { id: any; [name: string]: any }[]) => void;

    readonly?: boolean;
}
