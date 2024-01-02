import React from "react";
import { Drawer } from "antd";
import MenuItems from "./MenuItems";

type ComponentProps = {
  open: boolean;
  onClose: any;
};

const DrawerSection = ({ open, onClose }: ComponentProps) => {
  return (
    <Drawer
      style={{ background: "#20252b", }}
      placement="left"
      onClose={onClose}
      open={open}
    >
      <MenuItems />
    </Drawer>
  );
};

export default DrawerSection;
