import React, { Component } from "react";
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
