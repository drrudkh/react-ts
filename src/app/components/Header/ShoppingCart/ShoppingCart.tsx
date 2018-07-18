import React from "react";
import { connect } from 'react-redux';

import "./_shopping-cart.scss";

interface IProps {
    cartCount: number;
}

class ShoppingCart extends React.Component<IProps> {
  render() { 
    return (
        <div className="shopping-cart">
            <i className="fa fa-shopping-cart" />
            <div className="cart-item-count">{this.props.cartCount}</div>
        </div>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
        cartCount: state.length
    }
}

export default connect(mapStateToProps)(ShoppingCart);
