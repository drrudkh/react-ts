import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../../components/Modal_v2/Modal';
import ProductDescription from './ProductDescription/ProductDescription';
import { IProductDetailsProps } from '../../../interfaces/product_details.interface';
import { addToCart } from '../../../store/actions/creators';
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
    const { data, onAddToCart } = this.props;
    return (
      <>
        {this.state.showModal && (
          <Modal onToggleModal={this.onToggleModal}>
            <Modal.Header onToggleModal={this.onToggleModal} />
            <Modal.Body>
              <ProductDescription data={data}>
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
              <button type="button" onClick={onAddToCart}>
                Buy now
              </button>
            </Modal.Footer>
          </Modal>
        )}
        <li className="product">
          <ProductDescription
            data={data}
            onToggleModal={this.onToggleModal}
            onAddToCart={onAddToCart}
          />
          <button type="button" onClick={onAddToCart}>
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
