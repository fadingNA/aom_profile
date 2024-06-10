import React from "react";
import Navbar from "../navbar/navbar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
