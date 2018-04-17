import * as React from 'react';

import ToDoList from './components/ToDoList/ToDoList';

const TODOS: object[] =  [
    {
        id: 1,
        name: 'Learn JS'
    },
    {
        id: 2,
        name: 'Rape wimen'
    }
]

const App: React.SFC = () => {
    return (
        <ToDoList todos={TODOS}/>
    )
}

export default App;