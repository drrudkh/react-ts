import React from 'react';

import Header from './Header/Header';
import ProductList from '../containers/ProductList/ProductList';

const App: React.SFC = props => {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
};

export default App;
