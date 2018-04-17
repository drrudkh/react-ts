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

  private onItemAdd = () => {
    
  }

  private onItemRemove = (item: any) => {
    const arr: any = this.state.todos;
    arr.forEach( (todo: any, index: number) => {
      if ( todo.id === parseInt(item) ) {
        arr.splice(index, 1);
        this.setState({todos: arr});
      }
    })
  }

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
