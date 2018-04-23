import React from "react";

import ToDoItem from "../ToDoItem/ToDoItem";

interface IProps {
  todos: object[];
  onItemRemove: any;
}

const ToDoList: React.SFC<IProps> = props => {
  return (
    <ul>
      {props.todos.map((todo: any) => {
        return (
          <ToDoItem
            name={todo.name}
            key={todo.id}
            id={todo.id.toString()}
            onItemRemove={props.onItemRemove}
          />
        );
      })}
    </ul>
  );
};

export default ToDoList;
