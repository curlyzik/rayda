import React from "react";
import Header from "./Header";

interface Props {}
const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
