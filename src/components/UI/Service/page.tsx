import { FaCode, FaDatabase, FaSquarespace, FaWix, FaWordpress } from "react-icons/fa";
import { AiOutlineDesktop } from "react-icons/ai";
import styles from "./service.module.css";
import { FaPaintbrush } from "react-icons/fa6";

const items = [
  {
    icon: (
      <AiOutlineDesktop className="text-3xl md:text-4xl lg:text-5xl mb-4" />
    ),
    title: "Frontend Development",
  },
  {
    icon: <FaDatabase className="text-3xl md:text-4xl lg:text-5xl mb-4" />,
    title: "Backend Development",
  },
  {
    icon: <FaCode className="text-3xl md:text-4xl lg:text-5xl mb-4" />,
    title: "Full-stack Development",
  },
  {
    icon: <FaWordpress className="text-3xl md:text-4xl lg:text-5xl mb-4" />,
    title: "Wordpress Development",
  },
  {
    icon: <FaWix className="text-3xl md:text-4xl lg:text-5xl mb-4" />,
    title: "Wix Development",
  },
  {
    icon: <FaSquarespace className="text-3xl md:text-4xl lg:text-5xl mb-4" />,
    title: "Squarespace Development",
  },
  {
    icon: <FaPaintbrush className="text-3xl md:text-4xl lg:text-5xl mb-4" />,
    title: "UI/UX design",
  },
];

const Service = () => {
  return (
    <div className="mt-20">
      <div className="w-[90%] mx-auto">
        <div
          className={`text-[50px] lg:text-[100px] xl:text-[130px] md:text-[80px] font-bold ${styles.header_title}`}
        >
          <h1>Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-center">
          {items.map((item, index) => (
            <div
              key={index + 1}
              className="flex items-center w-80 h-80 shadow-2xl border-4 border-[#18181b]/10 my-5 text-white"
            >
              <div className="border-y border-[#17e551] h-60 w-full flex justify-center items-center">
                <div className="w-60  h-full border-x border-[#17e551] flex flex-col justify-center items-center p-5">
                  {item.icon}
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end items-center mt-16">
          <button
            className={`px-5 py-1.5 lg:py-2 rounded-md text-[#114b68] font-medium text-md md:text-lg lg:text-xl ${styles.buttonColor}`}
          >
            Show service details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
