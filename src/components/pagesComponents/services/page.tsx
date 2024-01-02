import Image from "next/image";
import React from "react";
import ProjectImage from "@/utilities/Tanvir_immage_PNG_1.png";
import { Divider } from "antd";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PopoverComponent from "@/components/UI/popover/popover";
import styles from "@/components/pagesComponents/services/service.module.css";

const ServiceComponent = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div className="shadow-md shadow-[#18181b] transition duration-500 rounded-md my-5">
          <div>
            <Image
              className="w-full h-40 md:h-60 lg:80 xl:h-96"
              src={ProjectImage}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <h5 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white my-2 p-2 text-justify round-md px-5">
              HDLKFLKjlk
            </h5>
            <Divider className="bg-[#17e58d]" />
            <div className="grid grid-cols-3 justify-start justify-items-center items-center gap-3">
              <Link
                href=""
                className="flex gap-2 items-center font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
              >
                <PopoverComponent content={"Live link"}>
                  <FaExternalLinkAlt />
                </PopoverComponent>
              </Link>

              <Link
                href=""
                className="flex gap-2 items-center font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
              >
                <PopoverComponent content={"Client side"}>
                  <FaGithub />
                </PopoverComponent>
              </Link>

              <Link
                href=""
                className="flex gap-2 items-center font-medium text-sm lg:text-md xl:text-xl text-[#114b68] md:text-[#e8f7fb]"
              >
                <PopoverComponent content={"Server side"}>
                  <FaGithub />
                </PopoverComponent>
              </Link>
            </div>
            <Divider className="bg-[#17e58d]" />
            <p className="text-md md:text-lg lg:text-xl text-white my-2 p-2 px-5 text-justify round-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab aut
              enim cumque ducimus accusantium necessitatibus repellendus, error
              fuga optio sapiente eligendi. Nesciunt necessitatibus debitis
              tenetur illum, eum in iusto possimus. See more.....
            </p>
          </div>
          <div className="m-3">
            <Link href="">
              <button
                className={`w-full py-1.5 lg:py-2 rounded-md text-[#e8f7fb] md:text-[#20252b] font-medium text-md md:text-lg lg:text-xl ${styles.buttonColor}`}
              >
                Show details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
