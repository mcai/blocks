export interface SimpleTodoAppTodoProps {
    todo: string;

    index: number;

    onRemove: (index: number) => void;
}
