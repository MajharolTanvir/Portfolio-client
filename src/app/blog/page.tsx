import BlogComponent from '@/components/pagesComponents/blog/page';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Portfolio | Blog",
  description: "This is Majharul tanvir's portfolio blog page.",
};

const Blog = () => {
  return <BlogComponent />
}

export default Blog