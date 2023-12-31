import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header></Header>
      <main style={{ minHeight: "77vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};
Layout.defaultProps = {
  title: "VehicleShop",
  description: "mer stack project",
  keywords: "mern,react,node,mongoDB",
  author: "Iztihad",
};
export default Layout;
