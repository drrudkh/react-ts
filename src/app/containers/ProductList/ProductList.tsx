import React from 'react';
import { connect } from 'react-redux';

import Product from './Product/Product';
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import './_product-list.scss';
import { requestData } from '../../store/actions/creators';

interface IProps {
  requestData: () => void;
  books: Array<Object>;
}

interface IState {
  searchTerm: string;
}

class ProductList extends React.Component<IProps, IState> {
  public readonly state: IState = {
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
    this.props.requestData();
  }

  render() {
    return (
      <>
        <SearchBar onInputChange={this.onInputChange} />
        {!this.props.books.length && <Spinner />}
        <ul className="product-list">
          {this.props.books
            .filter(this.checkForItemInArr)
            .map((item: any) => <Product data={item} key={item._id} />)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestData: () => dispatch(requestData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
