import React from "react";

interface IProps {
  title: any;
  author: any;
  year: any;
}

const Product: React.SFC<IProps> = props => (
  <div className="product-body">
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
    <h3>{props.year}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
);

export default Product;
