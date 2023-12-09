import AboutComponent from "@/components/pagesComponents/about/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | About",
  description: "This is Majharul tanvir's portfolio about page.",
};

const About = () => {
  return <AboutComponent />;
};

export default About;
