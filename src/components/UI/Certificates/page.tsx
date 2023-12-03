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
    <div className="mt-20 text-secondaryColor">
      <div className="lg:grid grid-cols-12 items-center justify-items-center">
        <div
          className={`lg:-rotate-90 col-span-2 text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
        >
          <h1>Success</h1>
        </div>
        <div className="col-span-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.title}
                className="card w-full bg-secondaryColor/5 drop-shadow-md shadow-xl cursor-pointer"
              >
                <div>
                  <Image
                    src={certificate.thumbnail}
                    alt=""
                    className="w-full h-80 object-cover object-top hover:object-bottom duration-[6000ms] ease-linear"
                    height={300}
                    width={350}
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title">{certificate.title}</h2>
                  <p>{certificate.duration}</p>
                  <span className="text-lg font-medium">
                    {certificate.courseProvider}
                  </span>
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