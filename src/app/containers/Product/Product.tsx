import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../../store/actions/actionCreators";
import Modal from "../../components/Modal/Modal";
import "./_product.scss";

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
    const { title, author, language, pages } = this.props.data;
    return (
      <>
        {this.state.showModal && (
          <Modal
            product={this.props.data}
            toggleModal={this.onToggleModal}
            addToCart={this.props.onAddToCart}
          />
        )}
        <li className="product-body">
          <img
            src="http://thebookcovermachine.com/wp-content/uploads/2014/02/premade-exclusive-book-cover-601.jpg"
            onClick={this.onToggleModal}
          />
          <h2>{title}</h2>
          <h3>{author}</h3>
          <h3>{language}</h3>
          <h2 className="product-price">{`${pages} $`}</h2>
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
    onAddToCart: () => dispatch(addToCart(ownProps)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
