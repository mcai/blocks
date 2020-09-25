import React from "react";
import {SimpleTodoAppTodo} from "../SimpleTodoAppTodo/SimpleTodoAppTodo";
import {SimpleTodoAppTodoListProps} from "./SimpleTodoAppTodoListProps";

export class SimpleTodoAppTodoList extends React.Component<SimpleTodoAppTodoListProps, any> {
    render() {
        return (
            <div className='list-wrapper'>
                {
                    this.props.todos.map((todo: string, index: number) => (
                        <SimpleTodoAppTodo key={index} todo={todo} index={index} onRemove={this.props.onRemove}/>
                    ))
                }
            </div>
        );
    }
}
