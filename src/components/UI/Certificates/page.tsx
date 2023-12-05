import React from "react";
import styles from "./certificates.module.css";
import Image from "next/image";
import amaderAcademy from "@/utilities/amader_academy.jpg";
import phMain from "@/utilities/ph_main.jpg";
import recommendation from "@/utilities/ph_recommendation.jpg";
import wordpress from "@/utilities/wordpress_codemanbd.jpg";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Wordpress and E-commerce",
      thumbnail: wordpress,
      duration: "10 Oct 2022 - 15 march 2023",
      courseProvider: "CodemanBD",
    },
    {
      title: "Complete web development",
      thumbnail: phMain,
      duration: "31 Dec 2021 - 25 Agu 2022",
      courseProvider: "Programming hero",
    },
    {
      title: "Recommendation",
      thumbnail: recommendation,
      duration: "31 Dec 2021 - 25 Agu 2022",
      courseProvider: "Programming hero",
    },
    {
      title: "Web design",
      thumbnail: amaderAcademy,
      duration: "16 Sep 2021 - 25 Nov 2021",
      courseProvider: "Amader Academy",
    },
  ];

  return (
    <div className="mt-20 bg-[#114b68] pb-20">
      <div className="w-[90%] mx-auto">
        <div
          className={`col-span-2 text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
        >
          <h1>Certificates</h1>
        </div>
        <div className="w-full text-[#e8f7fb]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-10">
            {certificates.map((certificate) => (
              <div
                key={certificate.title}
                className="card w-full shadow-xl"
              >
                <div>
                  <Image
                    src={certificate.thumbnail}
                    alt=""
                    className="w-full h-[250px] md:h-[300px] lg:h-[450px] object-cover object-top hover:object-bottom duration-[6000ms] ease-linear"
                    height={300}
                    width={350}
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
                    {certificate.title}
                  </h2>
                  <span className="text-lg font-semibold">
                    {certificate.courseProvider}
                  </span>
                  <p>{certificate.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
