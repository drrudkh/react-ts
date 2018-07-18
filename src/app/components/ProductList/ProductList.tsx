import React from "react";

import Product from "../../containers/Product/Product";
import books from "../../../books.json";
import "./_product-list.scss";

const ProductList: React.SFC = () => {
  return (
    <ul className="product-list">
      {books.map((item: any, index: number) => {
        return (
          <Product
            title={item.title}
            author={item.author}
            price={item.pages}
            language={item.language}
            key={item._id}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
