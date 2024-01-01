"use client";


import { Divider } from "antd";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from './resetPassword.module.css'

interface FormData {
  password: string;
}



const ResetPassword = ({
  searchParams,
}: {
  searchParams: { token: string };
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };


  return (
    <section>
      <div className={`min-h-screen flex justify-center items-center`}>
        <div
          className={`mx-5 p-5 md:p-10 border rounded-md border-secondaryColor text-secondaryColor ${styles.reset_password_form}`}
        >
          <h2 className="text-center font-bold text-2xl mb-2 text-white">
            Reset Password
          </h2>
          <Divider className="bg-white" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#18181b] hover:border-[#ffffff] mb-5 w-full"
                type="password"
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
    </section>
  );
};

export default ResetPassword;
