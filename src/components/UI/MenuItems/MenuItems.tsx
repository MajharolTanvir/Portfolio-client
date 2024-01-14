import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const activePath = usePathname();
  const items = [
    {
      key: "blog",
      icon: <FaBookOpen />,
      label: (
        <Link
          href="/dashboard/blog"
          className={`px-2 ${
            activePath === "/dashboard/blog" && "font-semibold"
          }`}
        >
          Blogs
        </Link>
      ),
    },
    {
      key: "projects",
      icon: <GoProject />,
      label: (
        <Link
          href="/dashboard/projects"
          className={`px-2 ${
            activePath === "/dashboard/projects" && "font-semibold"
          }`}
        >
          Projects
        </Link>
      ),
    },
  ];

  return items;
};

export default MenuItems;
