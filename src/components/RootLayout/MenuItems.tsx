import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Service", link: "/service" },
  { label: "Project", link: "/project" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

const MenuItems = () => {
  const activePath = usePathname();

  return (
    <div className="flex justify-center items-center w-full gap-5">
      {pages.map((page) => (
        <Link
          key={page.link}
          href={page.link}
          className={`px-2 pb-4 ${
            activePath === page.link ? "font-bold" : "text-white"
          }`}
        >
          {page.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
