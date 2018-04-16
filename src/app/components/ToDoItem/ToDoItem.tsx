import React from 'react';

interface IProps {
    name: string,
    key: number
}

interface IState {

}

export default class ToDoItem extends React.Component<IProps, IState> {
    static props: IProps

    static state: IState

    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}