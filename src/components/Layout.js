import React from "react";
import { Layout as AntLayout, Row, Col } from "antd";

const { Content } = AntLayout;

class Layout extends React.Component {
  render() {
    return (
      <AntLayout style={{ padding: "24px 0", background: "#fff" }}>
        <Content>
          <Row>
            <Col span={12} offset={6}>
              {this.props.children}
            </Col>
          </Row>
        </Content>
      </AntLayout>
    );
  }
}

export default Layout;
