import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/Modal_v2/Modal';
import ProductDescription from './ProductDescription/ProductDescription';
import { addToCart } from '../../store/actions/actionCreators';
import './_product.scss';

interface IProps {
  data: any;
  onAddToCart: () => void;
}

interface IState {
  showModal: boolean;
}

class Product extends React.Component<IProps, IState> {
  public readonly state: IState = {
    showModal: false
  };

  private onToggleModal = (): void => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal toggleModal={this.onToggleModal}>
            <Modal.Header>
              <h1>Modal header</h1>
            </Modal.Header>
            <Modal.Body>
              <ProductDescription
                metadata={this.props.data}
                toggleModal={this.onToggleModal}
                addToCart={this.props.onAddToCart}
              />
            </Modal.Body>
            <Modal.Footer>
              <h1>Modal footer</h1>
              <button type="button" onClick={this.props.onAddToCart}>
                Buy now
              </button>
            </Modal.Footer>
          </Modal>
        )}
        <li>
          <ProductDescription
            metadata={this.props.data}
            toggleModal={this.onToggleModal}
            addToCart={this.props.onAddToCart}
          />
          <button type="button" onClick={this.props.onAddToCart}>
            Buy now
          </button>
        </li>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onAddToCart: () => dispatch(addToCart(ownProps))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
