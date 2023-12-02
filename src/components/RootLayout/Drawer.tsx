import React from "react";
import { Drawer } from "antd";
import MenuItems from "./MenuItems";

type ComponentProps = {
  open: boolean;
  onClose: any;
};

const DrawerSection = ({ open, onClose }: ComponentProps) => {
  return (
    <Drawer title="Menus" placement="left" onClose={onClose} open={open}>
      <MenuItems navMode="vertical" menuTheme="light" />
    </Drawer>
  );
};

export default DrawerSection;
