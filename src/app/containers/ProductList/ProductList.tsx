import React from "react";
import { connect } from "react-redux";

import Product from "../Product/Product";
import "./_product-list.scss";

interface IProps {
  books: any;
  searchTerm: string;
}

class ProductList extends React.Component<IProps> {
  private sanitizeString = (string: string): string => {
    return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  private checkForTermInString = (string: string): boolean => {
    return this.sanitizeString(string).includes(this.props.searchTerm)
      ? true
      : false;
  };

  render() {
    return (
      <ul className="product-list">
        {this.props.books
          .filter((item: any) => {
            return (
              this.checkForTermInString(item.author) ||
              this.checkForTermInString(item.title)
            );
          })
          .map((item: any) => <Product data={item} key={item._id} />)}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.products.productsDisplayed,
    searchTerm: state.products.searchTerm
  };
};

export default connect(mapStateToProps)(ProductList);
