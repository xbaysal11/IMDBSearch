import React from "react";
import { Layout as AntLayout, Row, Col } from "antd";
import Header from "./Header";
import "./Layout.sass";

const { Content } = AntLayout;

class Layout extends React.Component {
  render() {
    return (
      <AntLayout>
        <Header />
        <Content style={{ padding: "24px 0", background: "#fff" }}>
          <Row>
            <Col>{this.props.children}</Col>
          </Row>
        </Content>
      </AntLayout>
    );
  }
}

export default Layout;
