import React from "react";

import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

const TODOS = [
  {
    id: 1,
    name: "Learn JS"
  },
  {
    id: 2,
    name: "Rape wimen"
  }
];

interface IState {
  todos: object[];
}

export default class App extends React.Component<{}, IState> {
  public readonly state: IState = {
    todos: TODOS
  };

  private onItemAdd = (item: object): void => {
    this.setState( state => ({
      todos: [...state.todos, item]
    }))
  };

  private onItemRemove = (item: any): void => {
    const todos = this.state.todos;
    todos.forEach((todo: any, index: number) => {
      if (todo.id === parseInt(item)) {
        todos.splice(index, 1);
        this.setState({ todos });
      }
    });
  };

  render() {
    return (
      <div>
        <ToDoForm onItemAdd={this.onItemAdd} arrLength={this.state.todos.length}/>
        <ToDoList todos={this.state.todos} onItemRemove={this.onItemRemove} />
      </div>
    );
  }
}
