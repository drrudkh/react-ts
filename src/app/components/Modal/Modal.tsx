import React from "react";
import { connect } from "react-redux";

import { addToCart, closeModal } from "../../store/actions/actionCreators";
import "./_modal-content.scss";

interface IProps {
  product: any;
  showModal: boolean;
  onCloseModal: () => void;
  onAddToCart: () => void;
}

class Modal extends React.Component<IProps> {
  onKeyUp = () => {
    const key = 27;
  };

  onOutsideClick = (e) => {
    if (e.target !== document.querySelector('.modal-overlay')) {
      console.log(document.querySelector('.modal-overlay'))
      this.props.onCloseModal();
    }
  }

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyUp, false)
    document.addEventListener('click', this.onOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick, false);
  }

  render() {
    return (
      <>
          <div className="modal-overlay">
            <div className="modal-content">
              <i
                className="fa fa-times close"
                aria-hidden="true"
                onClick={this.props.onCloseModal}
              />
              <img src="http://thebookcovermachine.com/wp-content/uploads/2014/02/premade-exclusive-book-cover-601.jpg" />
              <div className="modal-meta">
                <h2>{this.props.product.title}</h2>
                <h3>{this.props.product.author}</h3>
                <h3>{this.props.product.language}</h3>
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
                <h2 className="product-price">{`${
                  this.props.product.pages
                } $`}</h2>
                <button type="button" onClick={this.props.onAddToCart}>
                  Buy now
                </button>
              </div>
            </div>
          </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
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
)(Modal);
