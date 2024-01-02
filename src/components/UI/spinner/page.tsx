"use client";
import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#17e551"
        secondaryColor="#17e58d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
