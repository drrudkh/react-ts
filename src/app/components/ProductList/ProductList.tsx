import React from "react";

import Product from "../../containers/Product/Product";
import books from "../../../books.json";
import "./_product-list.scss";

interface IState {
  searchTerm: string;
}

export default class ProductList extends React.Component<{}, IState> {
  public readonly state: IState = {
    searchTerm: ""
  };

  private onInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    this.setState({ searchTerm: event.target.value });
  };

  private sanitizeString = (string: string): string => {
    return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  private checkTerm = (string: string): boolean => {
    return this.sanitizeString(string).includes(this.state.searchTerm)
      ? true
      : false;
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Search by book, author"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
        />
        <ul className="product-list">
          {books
            .filter((item: any) => {
              return this.checkTerm(item.author) || this.checkTerm(item.title);
            })
            .map((item: any) => <Product data={item} key={item._id} />)}
        </ul>
      </>
    );
  }
}
