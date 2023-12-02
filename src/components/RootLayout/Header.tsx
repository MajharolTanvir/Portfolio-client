import React from "react";
import { Layout, Popover } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Header } = Layout;
import logo from "@/utilities/logo.png";
import { CgProfile } from "react-icons/cg";
import MenuItems from "./MenuItems";

const text = <span>Title</span>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const HeaderSection = () => {

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <Image
          src={logo}
          className="h-10 w-10"
          alt="Logo"
          width={200}
          height={200}
        />
      </Link>
      <MenuItems />
      <Popover
        placement="bottomRight"
        title={text}
        content={content}
      >
        <CgProfile className="text-3xl text-white" />
      </Popover>
    </Header>
  );
};

export default HeaderSection;
