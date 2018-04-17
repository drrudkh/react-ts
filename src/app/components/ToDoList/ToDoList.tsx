import React from "react";

import ToDoItem from "../ToDoItem/ToDoItem";

interface IProps {
  todos: object[];
}

interface IState {
  todos: object[];
}

export default class ToDoList extends React.Component<IProps, IState> {
  public state = {
    ...this.props
  };

  onItemRemove = (item: any) => {
    const todoArr: any = this.state.todos;
    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].id === parseInt(item)) {
        todoArr.splice(i, 1);
        this.setState({ todos: todoArr });
      }
    }
  };

  render() {
    return (
      <ul>
        {this.props.todos.map((todo: any) => {
          return (
            <ToDoItem
              name={todo.name}
              key={todo.id}
              id={todo.id.toString()}
              onItemRemove={this.onItemRemove}
            />
          );
        })}
      </ul>
    );
  }
}
