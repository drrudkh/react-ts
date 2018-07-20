import React from "react";
import { connect } from "react-redux";

import Header from "./Header/Header";
import ProductList from "../components/ProductList/ProductList";
import Modal from "./Modal/Modal";

interface IProps {
  renderModal: boolean;
}

const App: React.SFC<IProps> = props => {
  return (
    <>
      <Header />
      <ProductList />
      {props.renderModal && <Modal />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    renderModal: state.modal.show
  }
};

export default connect(mapStateToProps)(App);
