import React from "react";

interface IProps {
  onItemAdd: any;
  arrLength: number;
}

interface IState {
  id: number;
  name: string;
}

export default class ToDoForm extends React.Component<IProps, IState> {
  public state: IState = {
    id: null,
    name: ""
  };

  onInputChange = (event: any) => {
    this.setState({
      id: this.props.arrLength + 1,
      name: event.target.value
    });
  };

  onInputSubmit = (event: any) => {
    event.preventDefault();
    this.props.onItemAdd(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onInputSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.onInputChange}
          placeholder="Add todo"
        />
        <input type="submit" value="Submit" />
        <h1>{this.state.name}</h1>
      </form>
    );
  }
}
