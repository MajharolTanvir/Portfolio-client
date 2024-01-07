import React from 'react'
import axios from "axios";
import styles from "./contactform.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { Divider } from 'antd';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const ContactForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
      console.log(data);

      try {
        const response = await axios.post(
          "https://localhost:5000/api/v1/users/signup",
          {
            body: JSON.stringify(data),
          }
        );
        console.log(response);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    
    
  return (
    <div
      className={`mx-5 p-5 md:p-10 rounded-md text-white ${styles.contact_form}`}
    >
      <div className="text-center">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 pb-2">
          Contact form
        </h4>
        <p className="text-md md:text-lg lg:text-xl mb-5 pb-2">
          If you have any queries or you need to contact with me then fill the
          form.
        </p>
      </div>
      <Divider className="bg-[#17e551]" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="md:flex justify-center items-center gap-5">
            <div className="w-full">
              <input
                className="bg-transparent p-2 text-md md:text-lg w-full outline-none border-b border-[#17e551] focus:border-none focus:shadow-inner focus:shadow-[#17e551] focus:duration-700 mb-2"
                type="text"
                placeholder="First name"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="mb-2 text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                className="bg-transparent p-2 text-md md:text-lg w-full outline-none border-b border-[#17e551] focus:border-none focus:shadow-inner focus:shadow-[#17e551] focus:duration-700 mb-2"
                type="text"
                placeholder="Last name"
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && (
                <p className="mb-2 text-red-600">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="md:flex justify-center items-center gap-5">
            <div className="w-full">
              <input
                className="bg-transparent p-2 text-md md:text-lg w-full outline-none border-b border-[#17e551] focus:border-none focus:shadow-inner focus:shadow-[#17e551] focus:duration-700 mb-2"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <p className="mb-2 text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                className="bg-transparent p-2 text-md md:text-lg w-full outline-none border-b border-[#17e551] focus:border-none focus:shadow-inner focus:shadow-[#17e551] focus:duration-700 mb-2"
                type="phone"
                placeholder="Phone (Whatsapp)"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <p className="mb-2 text-red-600">{errors?.phone?.message}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              className="bg-transparent p-2 text-md md:text-lg w-full outline-none border-b border-[#17e551] focus:border-none focus:shadow-inner focus:shadow-[#17e551] focus:duration-700 mb-2"
              rows={4}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="mb-2 text-red-600">{errors.password.message}</p>
            )}
          </div>

          <input
            className={`px-5 py-1.5 lg:py-2 rounded-md text-[#114b68] font-medium text-md md:text-lg lg:text-xl w-full ${styles.buttonColor}`}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactForm