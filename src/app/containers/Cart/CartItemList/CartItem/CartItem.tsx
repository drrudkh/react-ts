import React from 'react';
import { connect } from 'react-redux';

import './_cart-item.scss';

interface IProps {
  data: any;
  qty: number;
}

class CartItem extends React.Component<IProps> {
  render() {
    return (
      <li className="cart-item">
        <img src="https://www.wallpaperup.com/uploads/wallpapers/2015/06/02/708335/c72310c801d4d992b1a55c7052acb782.jpg" />
        <div className="metadata">
          <h2>{this.props.data.title}</h2>
          <h3>by {this.props.data.author}</h3>
          <h4>Qty: {this.props.qty}</h4>
          <button>Remove</button>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapDispatchToProps)(CartItem);
