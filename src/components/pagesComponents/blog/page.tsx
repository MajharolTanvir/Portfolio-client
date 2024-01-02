import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/components/pagesComponents/blog/blog.module.css";
import ProjectImage from "@/utilities/Tanvir_immage_PNG_1.png";

const BlogComponent = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        <div className="shadow-md shadow-[#18181b] transition duration-500 rounded-md my-5">
          <div>
            <Image
              className="w-full h-40 md:h-60 lg:80 xl:h-96"
              src={ProjectImage}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <h5 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white my-2 p-2 text-justify round-md px-5">
              HDLKFLKjlk
            </h5>
          </div>
          <div className="m-3">
            <Link href="/blog/single-blog/gsfdgsdf">
              <button
                className={`w-full py-1.5 lg:py-2 rounded-md text-[#e8f7fb] md:text-[#20252b] font-medium text-md md:text-lg lg:text-xl ${styles.buttonColor}`}
              >
                Show details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
