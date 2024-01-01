import React from 'react'
import { Layout } from "antd";
const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#20252b", color: "white" }}>
      Ant Design ©2023 Created by Ant UED
    </Footer>
  );
}

export default FooterSection