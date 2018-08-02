import React from "react";

interface IProps {
  onInputChange: (event: any) => void;
}

const SearchBar: React.SFC<IProps> = props => {
    return (
      <input
        type="text"
        placeholder="Search by book, author"
        onChange={props.onInputChange}
      />
    );
}

export default SearchBar;