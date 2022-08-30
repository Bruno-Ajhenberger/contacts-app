import React from "react";
import NavBar from "../components/ui/NavBar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default PageLayout;
