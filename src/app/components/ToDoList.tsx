import React from "react";

import ToDoItem from "./ToDoItem/ToDoItem";

interface IProps {
  todos: object[];
}

interface IState {
  todos: object[];
}

// const ToDoList: React.SFC<IProps> = props => {
//     return (
//         <ul>
//             {props.todos.map( (todo: any) => {
//                 return <ToDoItem name={todo.name} key={todo.id} />
//             })}
//         </ul>
//     )
// }

// export default ToDoList;

export default class ToDoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo: any) => {
          return <ToDoItem name={todo.name} key={todo.id} />;
        })}
      </ul>
    );
  }
}
