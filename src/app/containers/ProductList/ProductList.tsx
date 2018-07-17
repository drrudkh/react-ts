import React from "react";
import { connect } from "react-redux";

import Product from "../../components/Product/Product";

interface IProps {
  products: Object[];
}

class ProductList extends React.Component<IProps> {
  render() {
    return this.props.products.map((item: any) => {
      return (
        <Product
          title={item.title}
          author={item.author}
          year={item.year}
          key={item._id}
        />
      );
    });
  }
}

function mapStateToProps(state: any) {
  return {
    products: state.productList
  };
}

export default connect(mapStateToProps)(ProductList);
