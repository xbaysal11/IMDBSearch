import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

const Search = Input.Search;

class SearchInput extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  render() {
    return (
      <Search
        placeholder="input search text"
        onSearch={this.props.onSearch}
        enterButton
      />
    );
  }
}

export default SearchInput;
