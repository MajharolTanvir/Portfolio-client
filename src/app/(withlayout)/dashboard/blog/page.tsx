import Image from "next/image";
import React from "react";
import BlogImage from "@/utilities/javascript_classes_take_some_understanding.webp";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="shadow-xl p-4 rounded-xl h-full flex justify-center items-center">
          <Link
            href=""
            className="flex flex-col h-full w-full justify-center items-center gap-2"
          >
            <FaPlus className="text-2xl" />
            <h3 className="text-2xl">Add blog</h3>
          </Link>
        </div>
        <div className="shadow-xl p-4 rounded-xl">
          <Image
            className="rounded-t-xl"
            alt="blog image"
            src={BlogImage}
            height={500}
            width={500}
          />
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
            LKJsdflsdkj klsdjklf sdalkj lsdalf kjsad
          </h3>
          <p className="text-justify my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            dicta impedit nihil quasi, numquam quae. Optio nesciunt, ratione
            nulla tempore, sint beatae labore, odit assumenda rerum reiciendis
            quas ipsam earum! <Link href="/">Read more...</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
