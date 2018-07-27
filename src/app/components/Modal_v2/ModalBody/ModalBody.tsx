import React from 'react';

import './_modal-body.scss';

export default class ModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">{this.props.children}</div>
        )
    }
}