/* import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import "./ListItem.sass";

const { Meta } = Card;

class ListItem extends Component {
  render() {
    return (
      <div className="cards">
        <Row>
          <Col>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="img" src={this.props.post} />}
            >
              <Meta
                title={this.props.title}
                description={`Type: ${this.props.type}, Year: ${
                  this.props.year
                }`}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListItem;
 */
import React from "react";
import { List, message, Avatar, Spin } from "antd";
import reqwest from "reqwest";
import "./ListItem.sass";

import InfiniteScroll from "react-infinite-scroller";

const fakeDataUrl =
  "https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo";

class ListItem extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true
  };

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results
      });
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: res => {
        callback(res);
      }
    });
  };

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true
    });
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false
      });
    });
  };

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => {
              // console.log(m);
              return (
                <div>
                  <List.Item key={this.props.imdbID}>
                    <List.Item.Meta
                      avatar={<img alt="img" src={this.props.post} />}
                      title={<a href="#">{this.props.title}</a>}
                      description={`Type: ${this.props.type}, Year: ${
                        this.props.year
                      }`}
                    />
                    <div>Content</div>
                  </List.Item>
                </div>
              );
            }}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}
export default ListItem;
