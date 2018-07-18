import React from "react";

import ProductList from "../components/ProductList/ProductList";
import Header from "./Header/Header";

const App: React.SFC = () => {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
};

export default App;
