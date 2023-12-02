import React, { useState } from "react";
import { Layout, Popover } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Header } = Layout;
import logo from "@/utilities/logo.png";
import { CgProfile } from "react-icons/cg";
import MenuItems from "./MenuItems";
import { FiMenu } from "react-icons/fi";
import DrawerSection from "./Drawer";

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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
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
      <div className="hidden md:block">
        <MenuItems navMode="horizontal" menuTheme="dark" />
      </div>
      <Popover
        className="hidden md:block"
        placement="bottomRight"
        title={text}
        content={content}
      >
        <CgProfile className="text-3xl text-white" />
      </Popover>
      <DrawerSection onClose={onClose} open={open} />
    </Header>
  );
};

export default HeaderSection;
