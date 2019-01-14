import React from "react";
import PropTypes from "prop-types";
import { Input, Row, Col } from "antd";

const Search = Input.Search;

class SearchInput extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <Search
            placeholder="input search text"
            onSearch={this.props.onSearch}
            enterButton
          />
        </Col>
      </Row>
    );
  }
}

export default SearchInput;
