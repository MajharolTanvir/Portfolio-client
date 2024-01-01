import { Timeline } from "antd";
import React from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import { RiUserLocationFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import styles from "./experience.module.css";

const Experiences = () => {
  return (
    <Timeline
      className=" hidden md:block"
      mode="alternate"
      items={[
        {
          children: (
            <div className="mt-10 xl:w-[600px]">
              <div
                className={`p-5 rounded-xl mb-5 ${styles.card_style} text-[#ffffff]`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <HiOfficeBuilding className="text-2xl" />
                  <h4 className="text-xl font-medium">
                    Marco international C&F LTD.
                  </h4>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-2xl" />
                  <h6 className="font-medium">Jatty sarkar</h6>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <RiUserLocationFill className="text-2xl" />
                  <h6 className="font-medium">
                    9 November, 2020 - 28 February, 2022
                  </h6>
                </div>
                <div className="flex items-center gap-3">
                  <FaLocationDot className="text-2xl" />
                  <h6>Agrabad, Chottogram</h6>
                </div>
              </div>
            </div>
          ),
          color: "#ffffff",
        },
      ]}
    />
  );
};

export default Experiences;
