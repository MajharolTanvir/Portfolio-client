import React from 'react'
import { Menu } from "antd";
import Link from "next/link";

const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Service", link: "/service" },
  { label: "Project", link: "/project" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const MenuItems = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={pages.map((page) => {
        return {
          key: page.label,
          label: <Link href={page.link}>{page.label}</Link>,
        };
      })}
    />
  );
}

export default MenuItems