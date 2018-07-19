import React from "react";
import { connect } from "react-redux";

import { addToCart, closeModal } from "../../../store/actions/actionCreators";
import "./_modal-content.scss";

interface IProps {
  product: any;
  showModal: boolean;
  onCloseModal: () => void;
  onAddToCart: () => void;
}

class ModalContent extends React.Component<IProps> {
  onKeyUp = () => {
    const key = 27;
  };

  onOutsideClick = () => {
  };

  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp, false);
    document.addEventListener("click", this.onOutsideClick, false);
  }

  componentWillUnmount() {
    window.addEventListener("keyup", this.onKeyUp, false);
    document.addEventListener("click", this.onOutsideClick, false);
  }

  render() {
    return (
      <>
        {this.props.showModal && (
          <div className="modal-overlay">
            <button type="button" onClick={this.props.onCloseModal}>
              Close
            </button>
            <div className="modal-content">
              <img src="http://thebookcovermachine.com/wp-content/uploads/2014/02/premade-exclusive-book-cover-601.jpg" />
              <div className="modal-meta">
                <h2>{this.props.product.title}</h2>
                <h3>{this.props.product.author}</h3>
                <h3>{this.props.product.language}</h3>
                <h2 className="product-price">{`${
                  this.props.product.price
                } $`}</h2>
              </div>
            </div>
            <button type="button" onClick={this.props.onAddToCart}>
              Buy now
            </button>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.modal.show,
    product: state.modal.item
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddToCart: () => dispatch(addToCart(ownProps)),
    onCloseModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContent);
