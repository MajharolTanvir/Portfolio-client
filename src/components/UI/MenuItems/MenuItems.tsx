import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const items = [
  {
    key: "home",
    icon: <UploadOutlined />,
    label: <Link href="/home">Home</Link>,
  },
  {
    key: "",
    icon: <UserOutlined />,
    label: "About",
  },
  {
    key: "",
    icon: <VideoCameraOutlined />,
    label: "Service",
  },
  {
    key: "",
    icon: <UploadOutlined />,
    label: "Contact",
  },
];

const MenuItems = () => {
  return items;
};

export default MenuItems;
