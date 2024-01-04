import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

const ContentStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          minHeight: "100vh",
          background: "#ffffff",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default ContentStyle;
