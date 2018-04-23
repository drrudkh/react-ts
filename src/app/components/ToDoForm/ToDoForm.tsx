import React from "react";

interface IProps {
  arrLength: number;
  onItemAdd: (item: object) => void;
}

interface IState {
  id: number;
  name: string;
}

export default class ToDoForm extends React.Component<IProps, IState> {
  public readonly state: IState = {
    id: null,
    name: ""
  };

  private onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      id: this.props.arrLength + 1,
      name: event.target.value
    });
  };

  private onInputSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.onItemAdd(this.state);
  };

  render(): JSX.Element {
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
