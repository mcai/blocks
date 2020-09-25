import React from "react";
import {SimpleTodoAppAddForm} from "./SimpleTodoAppAddForm/SimpleTodoAppAddForm";
import {SimpleTodoAppHeader} from "./SimpleTodoAppHeader/SimpleTodoAppHeader";
import {SimpleTodoAppTodoList} from "./SimpleTodoAppTodoList/SimpleTodoAppTodoList";

import "./SimpleTodoApp.css";
import {SimpleTodoAppProps} from "./SimpleTodoAppProps";
import {SimpleTodoAppState} from "./SimpleTodoAppState";

export class SimpleTodoApp extends React.Component<SimpleTodoAppProps, SimpleTodoAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            todos: this.props.initialTodos
        };
    }

    onAdd(todo: string) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    onRemove(index: number) {
        let newTodos = [...this.state.todos];
        newTodos.splice(index, 1);
        this.setState({
            todos: newTodos
        });
    }

    render() {
        return(
            <div className='wrapper'>
                <div className='card frame'>
                    <SimpleTodoAppHeader numTodos={this.state.todos.length} />
                    <SimpleTodoAppTodoList todos={this.state.todos} onRemove={(index: number) => this.onRemove(index)} />
                    <SimpleTodoAppAddForm onAdd={(todo: string) => this.onAdd(todo)} />
                </div>
            </div>
        );
    }
}
