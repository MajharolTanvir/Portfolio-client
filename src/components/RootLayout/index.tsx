"use client";
import { Layout, theme } from "antd";
import HeaderSection from "./Header";
import FooterSection from "./Footer";
import { ReactNode, } from "react";
const { Content } = Layout;

const Navbar = ({ children }: { children: ReactNode }) => {

  return (
    <main>
      <div className="py-3">
        <HeaderSection />
      </div>
      <Content>
        <div style={{ minHeight: "100vh" }}>{children}</div>
      </Content>
      <FooterSection />
    </main>
  );
};

export default Navbar;
