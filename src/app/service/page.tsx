import ServiceComponent from '@/components/pagesComponents/services/page';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Portfolio | Service",
  description: "This is Majharul tanvir's portfolio service page.",
};

const Service = () => {
  return <ServiceComponent />
}

export default Service