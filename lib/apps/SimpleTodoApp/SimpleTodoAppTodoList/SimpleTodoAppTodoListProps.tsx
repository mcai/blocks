export interface SimpleTodoAppTodoListProps {
    todos: string[];

    onRemove: (index: number) => void;
}
