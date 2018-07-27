import React from 'react';

interface IProps {
  toggleModal: () => void
}

export default class ModalHeader extends React.Component<IProps> {
  render() {
    return (
      <div className="modal-header">
        <button className="trigger" onClick={this.props.toggleModal}>
          <i className="fa fa-times close" aria-hidden="true" />
        </button>
        {this.props.children}
      </div>
    );
  }
}
