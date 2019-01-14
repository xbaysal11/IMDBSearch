import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import "./ListItem.sass";

const { Meta } = Card;

class ListItem extends Component {
  render() {
    return (
      <div
        style={{ display: "inline-flex", padding: "5%", textAlign: "center" }}
      >
        <Row>
          <Col>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="img" src={this.props.m} />}
            >
              <Meta title="Movie Title" description="www.website.com" />
            </Card>
          </Col>
          {/* <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="img" src={this.props.m} />}
            >
              <Meta title="Movie Title" description="www.website.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="img" src={this.props.m} />}
            >
              <Meta title="Movie Title" description="www.website.com" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="img" src={this.props.m} />}
            >
              <Meta title="Movie Title" description="www.website.com" />
            </Card>
          </Col> */}
        </Row>
      </div>
    );
  }
}

export default ListItem;
