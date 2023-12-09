"use client";
import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#114b68"
        secondaryColor="#e8f7fb"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
