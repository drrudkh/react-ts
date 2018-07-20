import React from "react";
import { connect } from "react-redux";

import { addToCart, openModal } from "../../store/actions/actionCreators";
import "./_product.scss";

interface IProps {
  data: any;
  onAddToCart: () => void;
  onOpenModal: () => void;
}

class Product extends React.Component<IProps> {
  render() {
    const { title, author, language, pages } = this.props.data;
    return (
      <li className="product-body">
        <img
          src="http://thebookcovermachine.com/wp-content/uploads/2014/02/premade-exclusive-book-cover-601.jpg"
          onClick={this.props.onOpenModal}
        />
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h3>{language}</h3>
        <h2 className="product-price">{`${pages} $`}</h2>
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
    onOpenModal: () => dispatch(openModal(ownProps.data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
