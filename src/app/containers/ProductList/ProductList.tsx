import React from 'react';
import axios from 'axios';

import Product from './Product/Product';
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import './_product-list.scss';

interface IProps {
  searchTerm: string;
}

interface IState {
  books: Array<Object>;
  searchTerm: string;
}

export default class ProductList extends React.Component<{}, IState> {
  public readonly state: IState = {
    books: [],
    searchTerm: ''
  };

  private onInputChange = (event): void => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  private sanitizeString = (string: string): string => {
    return string
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  private checkForTermInString = (string: string): boolean => {
    return this.sanitizeString(string).includes(this.state.searchTerm)
      ? true
      : false;
  };

  private checkForItemInArr = (item: any): boolean => {
    return (
      this.checkForTermInString(item.author) ||
      this.checkForTermInString(item.title)
    );
  };

  componentDidMount() {
    setTimeout(() => {
      axios.get('http://localhost:8080/src/books.json').then(resp => {
        this.setState({ books: resp.data });
      });
    }, null);
  }

  render() {
    return (
      <>
        {!this.state.books.length && <Spinner />}
        <SearchBar onInputChange={this.onInputChange} />
        <ul className="product-list">
          {this.state.books
            .filter(this.checkForItemInArr)
            .map((item: any) => <Product data={item} key={item._id} />)}
        </ul>
      </>
    );
  }
}
