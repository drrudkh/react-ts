import React from "react";
import { connect } from 'react-redux';

import Product from "../../containers/Product/Product";
import "./_product-list.scss";
interface IProps {
  books: any;
}

class ProductList extends React.Component<IProps> {
  // private onInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   this.setState({ searchTerm: event.target.value });
  // };

  // private sanitizeInput = (string: string): string => {
  //   return string
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "")
  //     .toLowerCase();
  // };

  // private checkTerm = (string: string): boolean => {
  //   return this.sanitizeInput(string).includes(this.state.searchTerm)
  //     ? true
  //     : false;
  // };

  render() {
    return (
      <>
        {/* <input
          type="text"
          placeholder="Search by book, author"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        /> */}
        <ul className="product-list">
          {this.props.books
            // .filter((item: any) => {
            //   return this.checkTerm(item.author) || this.checkTerm(item.title);
            // })
            .map((item: any) => <Product data={item} key={item._id} />)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.products
  }
}

export default connect(mapStateToProps)(ProductList);
