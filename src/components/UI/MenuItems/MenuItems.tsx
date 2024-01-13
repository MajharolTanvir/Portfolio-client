import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import Link from "next/link";

const items = [
  {
    key: "blog",
    icon: <FaBookOpen />,
    label: <Link href="/dashboard/blog">Blogs</Link>,
  },
  {
    key: "projects",
    icon: <GoProject />,
    label: <Link href="/dashboard/projects">Projects</Link>,
  },
];

const MenuItems = () => {
  return items;
};

export default MenuItems;
