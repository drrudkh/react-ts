import React from 'react';

import './_modal-header.scss';

interface IProps {
  onToggleModal: () => void
}

const ModalHeader: React.SFC<IProps> = props =>  {
    return (
      <div className="modal-header">
        <button className="trigger" onClick={props.onToggleModal}>
          <i className="fa fa-times close" aria-hidden="true" />
        </button>
        {props.children}
      </div>
    );
}

export default ModalHeader;
