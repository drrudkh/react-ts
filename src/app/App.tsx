import React from "react";

import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

const TODOS: object[] = [
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
  todos: object[]
}

export default class App extends React.Component<{}, IState> {
  public state: IState = {
    todos: TODOS
  };

  private onItemAdd = () => {};

  private onItemRemove = (item: any) => {
    // const arr: any = this.state.todos;
    // arr.forEach((todo: any, index: number) => {
    //   if (todo.id === parseInt(item)) {
    //     arr.splice(index, 1);
    //     this.setState({ todos: arr });
    //   }
    // });
    console.log('clicked')
  };

  render() {
    return (
      <div>
        <ToDoForm />
        <ToDoList
          todos={this.state.todos}
          onItemRemove={() => this.onItemRemove}
        />
      </div>
    );
  }
}
