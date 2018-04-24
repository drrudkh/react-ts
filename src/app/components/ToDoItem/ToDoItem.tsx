import React from "react";

interface IProps {
  name: string;
  key: number;
  id: number;
  onItemRemove: (id: number) => Function;
}

const ToDoItem: React.SFC<IProps> = props => {
  return (
    <li>
      {props.name}
      <button onClick={() => props.onItemRemove(props.id)}>Remove</button>
    </li>
  );
};

export default ToDoItem;
