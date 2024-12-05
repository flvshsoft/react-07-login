import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const DynamicBreadcrumb = () => {
  const location = useLocation();

  // Membagi path berdasarkan URL
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  // Membuat item breadcrumb berdasarkan path
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{pathSnippets[index]}</Link>
        </Breadcrumb.Item>
      );
    }),
  ];

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>
  );
};

export default DynamicBreadcrumb;
