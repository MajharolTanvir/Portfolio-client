"use client";
import styles from "./projects.module.css";
import React from "react";
import { ConfigProvider, Divider, Tabs } from "antd";
import type { TabsProps } from "antd";
import Image from "next/image";
import BlogImage from "@/utilities/javascript_classes_take_some_understanding.webp";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PopoverComponent from "../popover/popover";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "all",
    label: "All",
    children: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div
          className={`text-white shadow-md shadow-[#17e551]  ${styles.projectContainer}`}
        >
          <div className={` ${styles.imageWrapper}`}>
            <Image
              className="rounded-t-lg"
              src={BlogImage}
              alt="Project image"
              width={500}
              height={500}
            />
            <div className={` ${styles.iconWrapper}`}>
              <Link
                href=""
                className="font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
              >
                <PopoverComponent content={"Live link"}>
                  <FaExternalLinkAlt />
                </PopoverComponent>
              </Link>

              <Link
                href=""
                className="font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
              >
                <PopoverComponent content={"Client side"}>
                  <FaGithub />
                </PopoverComponent>
              </Link>

              <Link
                href=""
                className="items-center font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
              >
                <PopoverComponent content={"Server side"}>
                  <FaGithub />
                </PopoverComponent>
              </Link>
            </div>
          </div>
          <h3 className="text-lg md:text-lg lg:text-xl xl:text-2xl text-center font-medium m-2">
            Quick Tour Plan
          </h3>
          <div className="w-full h-[1px] bg-[#17e551] my-1" />
          <p className="text-justify p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos,
            mollitia modi sunt aperiam ratione, vero quam velit 
            eaque distinctio voluptate consequatur dolorem veritatis fugit,
            expedita tempore voluptates molestiae! Excepturi vero, rem earum
            officiis illo iure neque? <Link href="">Read more...</Link>
          </p>
          <div className="w-full h-[1px] bg-[#17e551] my-1" />
          <div className="grid grid-cols-2 md:grid-cols-3 justify-between">
            <p className="border border-[#17e551] px-2 py-1 rounded-lg m-2 text-center">
              React
            </p>
            <p className="border border-[#17e551] px-2 py-1 rounded-lg m-2 text-center">
              Naxt.js
            </p>
            <p className="border border-[#17e551] px-2 py-1 rounded-lg m-2 text-center">
              Node.js
            </p>
            <p className="border border-[#17e551] px-2 py-1 rounded-lg m-2 text-center">
              Express.js
            </p>
            <p className="border border-[#17e551] px-2 py-1 rounded-lg m-2 text-center">
              Mongodb
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "Full-stack",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Wordpress",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Wix",
    children: "Content of Tab Pane 3",
  },
  {
    key: "5",
    label: "Squarespace",
    children: "Content of Tab Pane 3",
  },
  {
    key: "6",
    label: "UI/UX",
    children: "Content of Tab Pane 3",
  },
];

const ProjectComponent = () => {
  return (
    <div className="mt-20 pb-20">
      <div className="w-[90%] mx-auto">
        <div
          className={`text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
        >
          <h1>Projects</h1>
        </div>
        <div>
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemColor: "#17e58d",
                  itemHoverColor: "#17e551",
                  itemSelectedColor: "#20252b",
                },
              },
            }}
          >
            <Tabs
              size="large"
              type="card"
              animated={true}
              defaultActiveKey="all"
              onChange={onChange}
              items={items}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
