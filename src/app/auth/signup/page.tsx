"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./signup.module.css";
import Link from "next/link";
import axios from "axios";
import { Divider } from "antd";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
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
    <div className="grid justify-center items-center h-screen">
      <div
        className={`mx-5 p-5 md:p-10 border rounded-md border-secondaryColor text-secondaryColor ${styles.signup_form}`}
      >
        <div className="flex justify-center">
          <h4 className="text-2xl font-medium mb-5 text-white pb-2">
            Sign up here
          </h4>
        </div>
        <Divider className="bg-white" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#18181b] hover:border-[#ffffff] mb-5 w-full"
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

            <div>
              <input
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#18181b] hover:border-[#ffffff] mb-5 w-full"
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="mb-2 text-red-600">{errors.lastName.message}</p>
              )}
            </div>

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
          <div className="flex justify-between items-center gap-5 mt-5">
            <Link className="text-white" href="/auth/signin">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
