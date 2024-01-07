import ContactComponent from "@/components/pagesComponents/Contact/page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Contact",
  description: "This is Majharul tanvir's portfolio contact page.",
};

const ContactPage = () => {
  return <ContactComponent />;
};

export default ContactPage;
