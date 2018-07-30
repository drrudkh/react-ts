import React, { ReactNode, ReactElement } from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';
import './_modal.scss';

interface IProps {
  children: ReactNode;
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
  /**
 * @function React.Children.map works on either an array of elements or a single element
 * whereas using @function this.props.children.map will only work on array of elements.
 */
    return (
      <div className="modal-overlay">
        <div className="modal-content">
            {React.Children.map(this.props.children, (childElem: ReactElement<IProps>) => {
                return React.cloneElement(childElem, {
                    toggleModal: this.props.toggleModal
                })
            })}
        </div>
      </div>
    );
  }
}
