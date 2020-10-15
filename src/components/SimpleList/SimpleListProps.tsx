import { SimpleListAddFormOption } from "./SimpleListAddForm/SimpleListAddFormOption";

export interface SimpleListProps {
    addFormOptions?: SimpleListAddFormOption[];

    rows?: { type: string; [name: string]: any }[];

    onUpdate: (rows?: { type: string; [name: string]: any }[]) => void;

    readonly?: boolean;
}
