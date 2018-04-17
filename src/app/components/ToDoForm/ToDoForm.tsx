import React from 'react';

interface IProps {

}

const ToDoForm: React.SFC<IProps> = props => {
    return (
        <form>
            <input placeholder="Add Todo" />
        </form>
    )
}

export default ToDoForm;