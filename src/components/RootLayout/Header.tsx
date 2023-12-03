import React, { useState } from "react";
import { Layout, Popover } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Header } = Layout;
import logo from "@/utilities/logo.png";
import MenuItems from "./MenuItems";
import { FiMenu } from "react-icons/fi";
import DrawerSection from "./Drawer";
import { UserOutlined } from "@ant-design/icons";

const text = <span>Title</span>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const HeaderSection = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header
      style={{ background: "#0c0724" }}
      className="grid grid-cols-2 md:grid-cols-3 justify-between items-center bg-secondaryColor"
    >
      <FiMenu className="md:hidden text-3xl text-white" onClick={showDrawer} />
      <Link href="/">
        <Image
          src={logo}
          className="h-10 w-10"
          alt="Logo"
          width={200}
          height={200}
        />
      </Link>
      <div className="hidden md:block w-full">
        <MenuItems />
      </div>
      <div className="flex justify-end">
        <Popover
          className="hidden md:block"
          placement="bottomRight"
          title={text}
          content={content}
        >
          <UserOutlined className="text-2xl text-white" />
        </Popover>
      </div>
      <DrawerSection onClose={onClose} open={open} />
    </Header>
  );
};

export default HeaderSection;
