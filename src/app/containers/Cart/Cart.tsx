import React from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/Modal_v2/Modal';
import CartItemList from './CartItemList/CartItemList';
import './_cart.scss';

interface IProps {
  itemsInCart: any;
}

interface IState {
  showModal: boolean;
}

class ShoppingCart extends React.Component<IProps, IState> {
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
            <Modal.Header onToggleModal={this.onToggleModal}>
              <h2>Order Details</h2>
            </Modal.Header>
            <Modal.Body>
              {this.props.itemsInCart.length === 0 ? (
                <h2>There's nothing here.</h2>
              ) : (
                <CartItemList data={this.props.itemsInCart} />
              )}
            </Modal.Body>
            {this.props.itemsInCart.length > 0 && (
              <Modal.Footer>
                <h2>
                  Total price: {this.props.itemsInCart.reduce((acc, item) => {
                    return acc + item.qty * item.data.pages;
                  }, 0)}
                  $
                </h2>
              </Modal.Footer>
            )}
          </Modal>
        )}
        <div className="shopping-cart" onClick={this.onToggleModal}>
          <i className="fa fa-shopping-cart" />
          <div className="cart-item-count">
            {this.props.itemsInCart.reduce((acc, item) => {
              return acc + item.qty;
            }, 0)}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    itemsInCart: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCart);
