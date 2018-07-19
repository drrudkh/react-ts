import React from "react";

import ModalContent from "./ModalContent/ModalContent";

interface IState {
  show: boolean;
}

export default class ModalLauncher extends React.Component<{}, IState> {
  public readonly state: IState = {
    show: false
  };

  onToggleModal(): void {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { show } = this.state;
    return (
      <>
        {show && (
          <ModalContent onClose={this.onToggleModal}>
            {this.props.children}
          </ModalContent>
        )}
        <button type="button">Show Details</button>
      </>
    );
  }
}
