import React from "react";
import { connect } from "react-redux";

import { addToCart, showModal } from "../../store/actions/actionCreators";
import "./_product.scss";

interface IProps {
  title: string;
  author: string;
  price: number;
  language: string;
  key: number;
  onAddToCart: () => void;
  onShowModal: () => void;
}

class Product extends React.Component<IProps> {
  render() {
    return (
      <li className="product-body">
        <img src="http://thebookcovermachine.com/wp-content/uploads/2014/02/premade-exclusive-book-cover-601.jpg" onClick={this.props.onShowModal} />
        <h2>{this.props.title}</h2>
        <h3>{this.props.author}</h3>
        <h3>{this.props.language}</h3>
        <h2 className="product-price">{`${this.props.price} $`}</h2>
        <button type="button" onClick={this.props.onAddToCart}>
          Buy now
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onAddToCart: () => dispatch(addToCart(ownProps)),
    onShowModal: () => dispatch(showModal(ownProps))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
