import React from "react";

import Header from "./Header/Header";
import ProductList from "../components/ProductList/ProductList";
import ModalContent from './Modal/ModalContent/ModalContent';


const App: React.SFC = () => {
  return (
    <>
      <Header />
      <ProductList />
      <ModalContent />
    </>
  );
};

export default App;