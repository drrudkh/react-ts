import React from "react";

import Product from "../../containers/Product/Product";
import books from "../../../books.json";
import "./_product-list.scss";

const ProductList: React.SFC = props => {
  return (
    <ul className="product-list">
      {books.map((item: any) => <Product data={item} key={item._id} />)}
    </ul>
  );
};

export default ProductList;
