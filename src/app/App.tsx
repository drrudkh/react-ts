import * as React from "react";

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

const App: React.SFC = () => {
  return (
    <div>
      <ToDoForm />
      <ToDoList todos={TODOS} />
    </div>
  );
};

export default App;
