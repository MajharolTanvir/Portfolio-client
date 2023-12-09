"use client";
import SomethingWentWrong from '@/utilities/error.svg'
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src={SomethingWentWrong}
        alt="Page not found"
        width={900}
        height={900}
      />
      <h2>Something went wrong!</h2>
      <span className="text-2xl">
        Return <Link href="/">Home page</Link>
      </span>
    </div>
  );
}
