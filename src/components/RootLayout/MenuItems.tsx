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
    <nav className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
      {pages.map((page) => (
        <Link
          key={page.link}
          href={page.link}
          className={`px-2 text-white ${
            activePath === page.link ? "font-semibold text-[#17e551]" : ""
          }`}
        >
          {page.label}
        </Link>
      ))}
    </nav>
  );
};

export default MenuItems;
