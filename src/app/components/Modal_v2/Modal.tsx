import React from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';
import './_modal.scss';

interface IProps {
  children: any;
  toggleModal: () => void;
}

export default class Modal extends React.Component<IProps> {
  static Header = props => <ModalHeader toggleModal={props.toggleModal}>{props.children}</ModalHeader>;
  static Body = props => <ModalBody>{props.children}</ModalBody>;
  static Footer = props => <ModalFooter>{props.children}</ModalFooter>;

  private onKeyPress = (event: KeyboardEvent): void => {
    const KEY: number = 27;
    if (event.keyCode === KEY) {
      this.props.toggleModal();
    }
  };

  private onOutsideClick = (event: MouseEvent): void => {
    if (event.target === document.querySelector('.modal-overlay')) {
      this.props.toggleModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPress);
    document.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyPress);
    document.removeEventListener('click', this.onOutsideClick);
  }

  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
            {React.Children.map(this.props.children, (childElem: any) => {
                return React.cloneElement(childElem, {
                    toggleModal: this.props.toggleModal
                })
            })}
        </div>
      </div>
    );
  }
}
