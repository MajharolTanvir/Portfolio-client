"use client";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./addBlog.module.css";

interface FormData {
  blogImage: string;
  title: string;
  description: string;
}

const AddBlog = () => {
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
    <div>
      <div
        className={`mx-5 p-5 md:p-10 text-white rounded-md bg-[#20252b] ${styles.addBlog_form}`}
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="px-5 py-2 focus:outline-none border-b border-[#17e551] hover:border-[#ffffff] mb-5 w-full"
                type="file"
                {...register("blogImage", {
                  required: "Blog image is required",
                })}
              />
              {errors.blogImage && (
                <p className="mb-2 text-red-600">{errors.blogImage.message}</p>
              )}
            </div>

            <div>
              <input
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#17e551] hover:border-[#ffffff] mb-5 w-full"
                type="text"
                placeholder="Title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="mb-2 text-red-600">{errors.title.message}</p>
              )}
            </div>

            <div>
              <textarea
                className="bg-transparent px-5 py-2 focus:outline-none border-b border-[#17e551] hover:border-[#ffffff] mb-5 w-full"
                rows={8}
                placeholder="description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="mb-2 text-red-600">
                  {errors.description.message}
                </p>
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

export default AddBlog;
