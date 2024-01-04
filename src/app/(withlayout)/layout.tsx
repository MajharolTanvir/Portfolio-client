"use client";
import React from "react";
import { Layout } from "antd";
import SidebarItems from "@/components/UI/sidebarItems/sidebarItems";
import ContentStyle from "@/components/UI/contentStyle/contentStyle";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SidebarItems />
      <ContentStyle>{children}</ContentStyle>
    </Layout>
  );
};

export default DashboardLayout;
