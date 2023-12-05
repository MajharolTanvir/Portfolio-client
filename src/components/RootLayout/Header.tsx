import React, { useState } from "react";
import { Popover } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "@/utilities/logo.png";
import MenuItems from "./MenuItems";
import { FiMenu } from "react-icons/fi";
import DrawerSection from "./Drawer";
import { FaUser } from "react-icons/fa";

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
    <header className="flex justify-evenly items-center w-[90%] mx-auto">
      <div className="flex justify-start gap-5 w-full md:w-10 items-center">
        <FiMenu
          className="md:hidden text-3xl text-white"
          onClick={showDrawer}
        />
        <Link href="/">
          <Image
            src={logo}
            style={{ height: "40px", width: "40px" }}
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="hidden md:block w-full">
        <MenuItems />
      </div>
      <div>
        <Popover
          className="hidden md:flex justify-end w-full"
          placement="bottomRight"
          title={text}
          content={content}
        >
          <FaUser className="text-4xl text-[#d6e7eb] border p-2 rounded-full" />
        </Popover>
      </div>
      <DrawerSection onClose={onClose} open={open} />
    </header>
  );
};

export default HeaderSection;
