"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./signin.module.css";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { Divider } from "antd";
// import { signIn } from "next-auth/react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignIn = () => {
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
      <div className={`mx-5 p-5 md:p-10 rounded-md ${styles.signup_form}`}>
        <div className="flex justify-center">
          <h4 className="text-2xl font-medium mb-5 pb-2 text-white">
            Signin form
          </h4>
        </div>
        <Divider className="bg-white" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#18181b] hover:border-[#ffffff] text-white mb-5 w-full"
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

            <div>
              <input
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#18181b] hover:border-[#ffffff] text-white mb-5 w-full"
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
          <div>
            <div className="flex flex-col justify-between">
              <div className="mt-5">
                <Link href="/auth/forgetPassword" className="text-white">
                  Forget password?
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mt-1 ">
                <Link href="/auth/signup" className="text-white">
                  Create a new account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
