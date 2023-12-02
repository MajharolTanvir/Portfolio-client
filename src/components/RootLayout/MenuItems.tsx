import React from "react";
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

type ComponentProps = {
  navMode: "horizontal" | "vertical";
  menuTheme: "dark" | "light";
}

const MenuItems = ({ navMode, menuTheme }: ComponentProps) => {
  return (
    <Menu
      className="text-black md:text-white"
      theme={menuTheme}
      mode={navMode}
      items={pages.map((page) => {
        return {
          key: page.label,
          label: <Link href={page.link}>{page.label}</Link>,
        };
      })}
    />
  );
};

export default MenuItems;
