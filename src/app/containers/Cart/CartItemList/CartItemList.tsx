import React from 'react';

import CartItem from './CartItem/CartItem';

interface IProps {
  data: any;
}

const CartItemList: React.SFC<IProps> = props => {
  return (
    <ul>
      {props.data.map(item => {
        return <CartItem key={item.data._id} data={item.data} qty={item.qty}/>;
      })}
    </ul>
  );
};

export default CartItemList;
