import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/Modal_v2/Modal';
import ProductDescription from './ProductDescription/ProductDescription';
import { IProductDetailsProps } from '../../interfaces/product_details.interface';
import { addToCart } from '../../store/actions/creators';
import './_product.scss';

interface IState {
  showModal: boolean;
}

class Product extends React.Component<IProductDetailsProps, IState> {
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
          <Modal onToggleModal={this.onToggleModal}>
            <Modal.Header onToggleModal={this.onToggleModal} />
            <Modal.Body>
              <ProductDescription data={this.props.data}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </ProductDescription>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" onClick={this.props.onAddToCart}>
                Buy now
              </button>
            </Modal.Footer>
          </Modal>
        )}
        <li>
          <ProductDescription
            data={this.props.data}
            onToggleModal={this.onToggleModal}
            onAddToCart={this.props.onAddToCart}
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
