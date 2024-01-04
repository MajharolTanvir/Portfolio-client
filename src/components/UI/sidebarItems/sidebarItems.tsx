import React from "react";
import { Layout, Menu } from "antd";
import MenuItems from "../MenuItems/MenuItems";

const { Sider } = Layout;


const SidebarItems = () => {

    
  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{ background: "#18181b" }}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        items={MenuItems()}
        style={{ background: "#18181b", color: "#ffffff" }}
        className="hover:text-[#17e551]"
      />
    </Sider>
  );
};

export default SidebarItems;
