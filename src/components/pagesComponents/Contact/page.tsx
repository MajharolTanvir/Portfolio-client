"use client";
import ContactForm from "@/components/UI/contactform/page";
import { Divider } from "antd";

const ContactComponent = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="md:grid grid-cols-2 justify-center items-center">
        <ContactForm />
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactComponent;
