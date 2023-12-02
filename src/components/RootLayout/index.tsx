"use client";
import { Layout, theme } from "antd";
import HeaderSection from "./Header";
import FooterSection from "./Footer";
import { ReactNode, useState } from "react";
const { Content } = Layout;

const Navbar = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <Layout className="layout">
      <HeaderSection />
      <Content style={{}}>
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer, minHeight: "100vh" }}
        >
          {children}
        </div>
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default Navbar;
