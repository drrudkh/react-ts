import React from 'react';

interface IProps {
  toggleModal: () => void
}

const ModalHeader: React.SFC<IProps> = props =>  {
    return (
      <div className="modal-header">
        <button className="trigger" onClick={props.toggleModal}>
          <i className="fa fa-times close" aria-hidden="true" />
        </button>
        {props.children}
      </div>
    );
}

export default ModalHeader;
