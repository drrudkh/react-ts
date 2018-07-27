import React from "react";
import { connect } from "react-redux";

import { search } from "../../store/actions/actionCreators";
interface IProps {
  onInputChange: (event: any) => void;
}

class SearchBar extends React.Component<IProps> {
  render() {
    return (
      <input
        type="text"
        placeholder="Search by book, author"
        onChange={this.props.onInputChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (event: any) => dispatch(search(event.target.value.toLowerCase()))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
