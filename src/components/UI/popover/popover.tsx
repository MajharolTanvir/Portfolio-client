import React, { ReactElement } from "react";
import { Button, Popover } from "antd";

type ComponentEle = {
  content: string;
  children: ReactElement;
};

const PopoverComponent = ({ content, children }: ComponentEle) => {
  return (
    <Popover content={content} trigger="hover" className="text-white">
      {children}
    </Popover>
  );
};

export default PopoverComponent;
