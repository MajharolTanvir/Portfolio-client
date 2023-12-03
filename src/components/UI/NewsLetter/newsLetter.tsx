import { Input } from "antd";
import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="bg-secondaryColor/5 py-10 mt-20">
      <div className="flex flex-col justify-center items-center ">
        <h4 className="text-3xl font-bold text-secondaryColor">
          Don&apos;t miss to Subscribe
        </h4>
        <p className="pt-2 pb-8 text-accentColor px-5 text-center">
          You received important blogs notification when publish in here.
        </p>
        <div className="relative">
          <Input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered w-full pr-16"
          />
          <button className="btn bg-secondaryColor text-mainColor absolute top-0 right-0 rounded-l-none h-full px-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
