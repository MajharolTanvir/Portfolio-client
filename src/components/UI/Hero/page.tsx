"use client";
import Image from "next/image";
import styles from "./hero.module.css";
import { useEffect, useState } from "react";
import SocialLink from "../SocialLink/page";
import personalImage from '@/utilities/Tanvir_immage_PNG_2.png'

const HeroSection = () => {
  const titles = [
    "Frontend Developer",
    "Backend Developer",
    "Full-stack Developer",
    "Wordpress Developer",
    "Wix Developer",
    "Squarespace Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className={styles.hero_header}>
      <div className={styles.hero_back_title}>
        <h1 className="">Majharul Tanvir</h1>
      </div>
      <div className="flex flex-col justify-center items-center z-10">
        <Image
          className={`h-full bg-transparent ${styles.hero_image}`}
          src={personalImage}
          alt=""
          height={600}
          width={600}
        />
        <div className={`-mt-12 ${styles.designation_title}`}>
          {titles.map((title, index) => (
            <h1
              key={index}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              {title}
            </h1>
          ))}
        </div>
        <div>
          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
