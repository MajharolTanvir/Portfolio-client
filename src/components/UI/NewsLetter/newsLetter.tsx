import { Input } from "antd";
import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="py-10 mt-20 bg-gradient-to-r from-[#17e551] to-[#17e58d]">
      <div className="flex flex-col justify-center items-center text-[#20252b]">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Don&apos;t miss to Subscribe
        </h4>
        <p className="pt-2 pb-8 px-5 text-center">
          You received important blogs notification when publish in here.
        </p>
        <div className="flex w-60 md:w-80 shadow-md rounded-md">
          <Input
            type="text"
            placeholder="username@site.com"
            className="input input-bordered w-full"
          />
          <button className="btn rounded-l-none h-full py-2 px-2 rounded bg-[#20252b] text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
