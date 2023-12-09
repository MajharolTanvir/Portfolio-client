import React from "react";
import notFound from "@/utilities/page_not_found.svg";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
          <Image src={notFound} alt="Page not found" width={900} height={900} />
          <span className="text-2xl">Return <Link href='/'>Home page</Link></span>
    </div>
  );
};

export default NotFound;
