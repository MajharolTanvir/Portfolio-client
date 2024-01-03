
import SingleBlogPage from "@/components/pagesComponents/blog/SingleBlog";
import { Metadata } from "next";
import React from "react";

type ComProps = {
  params: any
}

export const metadata: Metadata = {
  title: "Portfolio | Single blog",
  description: "This is Majharul tanvir's single blog.",
};

const SingleBlog = ({ params }: ComProps) => {

  return <SingleBlogPage params={params?.id} />;
};

export default SingleBlog;
