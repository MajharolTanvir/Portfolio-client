
import ProjectComponent from '@/components/pagesComponents/project/page';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description: "This is Majharul tanvir's portfolio projects page.",
};

const Project = () => {
  return <ProjectComponent />
}

export default Project;