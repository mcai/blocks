export interface SimpleListAddFormProps {
    initialItem?: { [name: string]: string };

    onAdd: (item: { [name: string]: string }) => void;
}
