"use client"
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./forgetPassword.module.css";
import { Divider } from "antd";

interface FormData {
  email: string;
}

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid justify-center items-center h-screen">
      <div
        className={`mx-5 p-5 md:p-10 border rounded-md border-secondaryColor text-secondaryColor ${styles.forget_password_form}`}
      >
        <div className="flex justify-center">
          <h4 className="text-2xl font-medium mb-5 pb-2 text-white">
            Forget password
          </h4>
        </div>
        <Divider className="bg-white" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#18181b] hover:border-[#ffffff] mb-5 w-full"
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

            <input
              className={`px-5 py-1.5 lg:py-2 rounded-md text-[#114b68] font-medium text-md md:text-lg lg:text-xl w-full ${styles.buttonColor}`}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
