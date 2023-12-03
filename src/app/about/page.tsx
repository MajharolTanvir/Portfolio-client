import React from "react";
import Image from "next/image";
import styles from "./about.module.css";
import { HiOfficeBuilding } from "react-icons/hi";
import { RiUserLocationFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import personalImage from '@/utilities/Tanvir_immage_PNG_1.png'

const About = () => {
  return (
    <div className="mt-20">
      <div
        className={`text-[50px] lg:text-[130px] xl:text-[150px] md:text-[80px] font-bold ${styles.header_title}`}
      >
        <h1>About</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10">
        <div className="border-b border-secondaryColor rounded-[100px] md:w-[600px] lg:w-[450px] xl:w-[600px] md:rounded-[150px] shadow-md shadow-secondaryColor">
          <Image src={personalImage} className="rounded-full" alt="" height={550} width={550} />
        </div>
        <div className="md:w-[600px] lg:w-[450px] xl:w-[600px] text-justify text-lg text-[#F4F7F9] mt-10 lg:mt-0">
          <p className="mb-10">
            I&apos;m
            <span className="font-bold text-2xl"> Majharul Tanvir</span> from
            Bangladesh. I completed Higher secondary in &quot;2019&quot;. I
            started my honours in &quot;2019&quot; but due to some family issues
            I stopped my studies in &quot;2020&quot;. I started a job on &quot;9
            November 2020&quot; and I resigned from the job on &quot;28 February
            2022&quot; because I wasn&apos;t interested in that job.
          </p>
          <p className="mb-10">
            I was start learning programming since &quot;September 2021&quot;. I
            am intrusted in this field. Day by day I like to increase my
            knowledge. Sometimes I feel frustrated I face the problem and and I
            can&apos;t solve it in a long time. But I love coding so I quickly
            come back and tried to solve it. I love learning new technologies
            and making my learning curve stronger. When I learned new
            technologies I try to implement them on my projects.
          </p>
          <p>
            My hobbies are Reading, swimming and playing badminton.I love the
            winter season. I love to travel anywhere. When I faced boredom I try
            to travel and come back with a fresh mind.
          </p>
        </div>
      </div>
      <div>
        <div className="mt-10">
          <div
            className={`text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
          >
            <h1>Experienced</h1>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 justify-items-center items-center">
            <div className={`p-5 rounded-xl mb-5 ${styles.card_style}`}>
              <div className="flex items-center gap-3 mb-3">
                <HiOfficeBuilding className="text-2xl text-secondaryColor" />
                <h4 className="text-xl font-medium">
                  Marco international C&F LTD.
                </h4>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FaBriefcase className="text-2xl text-secondaryColor" />
                <h6 className="font-medium">Jatty sarkar</h6>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <RiUserLocationFill className="text-2xl text-secondaryColor" />
                <h6 className="font-medium">
                  9 November, 2020 - 28 February, 2022
                </h6>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-2xl text-secondaryColor" />
                <h6>Agrabad, Chottogram</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;