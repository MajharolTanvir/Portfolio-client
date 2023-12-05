import { FaCode, FaSquarespace, FaWix, FaWordpress } from "react-icons/fa";
import styles from "./service.module.css";

const Service = () => {
  return (
    <div className="mt-20">
      <div className="w-[90%] mx-auto">
        <div
          className={`text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
        >
          <h1>Services</h1>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 justify-center items-center text-[#114b68]">
            <div
              className={`border border-secondaryColor p-5 md:py-10 flex flex-col justify-center items-center rounded-lg ${styles.service_Section}`}
            >
              <FaCode className="text-5xl" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                Frontend Development
              </h3>
            </div>
            <div
              className={`border border-secondaryColor p-5 md:py-10 flex flex-col justify-center items-center rounded-lg ${styles.service_Section}`}
            >
              <FaCode className="text-5xl" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                Backend Development
              </h3>
            </div>
            <div
              className={`border border-secondaryColor p-5 md:py-10 flex flex-col justify-center items-center rounded-lg ${styles.service_Section}`}
            >
              <FaCode className="text-5xl" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                Full-stack Development
              </h3>
            </div>

            <div
              className={`border border-secondaryColor p-5 md:py-10 flex flex-col justify-center items-center rounded-lg ${styles.service_Section}`}
            >
              <FaWordpress className="text-5xl" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                Wordpress Development
              </h3>
            </div>
            <div
              className={`border border-secondaryColor p-5 md:py-10 flex flex-col justify-center items-center rounded-lg ${styles.service_Section}`}
            >
              <FaWix className="text-5xl" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                Wix Development
              </h3>
            </div>
            <div
              className={`border border-secondaryColor p-5 md:py-10 flex flex-col justify-center items-center rounded-lg ${styles.service_Section}`}
            >
              <FaSquarespace className="text-5xl" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                Squarespace Development
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-16">
        <button className="bg-secondaryColor/80 hover:bg-transparent hover:shadow-sm hover:shadow-secondaryColor text-mainColor hover:border rounded-md hover:border-secondaryColor/80 hover px-5 py-1 text-white font-medium">
          Show service details
        </button>
      </div>
    </div>
  );
};

export default Service;
