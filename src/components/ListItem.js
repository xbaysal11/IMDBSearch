import React from "react";
import PropTypes from "prop-types";
import { List, Row, Col, Card, Button } from "antd";
import "./ListItem.sass";

const { Meta } = Card;

class ListItem extends React.Component {
  static propTypes = {
    movies: PropTypes.array.isRequired,
    is_loading: PropTypes.bool,
    onLoadMore: PropTypes.func.isRequired
  };

  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <List
            list={this.props.is_loading}
            dataSource={this.props.movies}
            renderItem={item => (
              <List.Item key={item.imdbID}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={item.Poster} />}
                >
                  <Meta title={item.Title} description={item.Year} />
                </Card>
              </List.Item>
            )}
            loadMore={
              <Button onClick={this.props.onLoadMore}>Load More</Button>
            }
          />
        </Col>
      </Row>
    );
  }
}
export default ListItem;
