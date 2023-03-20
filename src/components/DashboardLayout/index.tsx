import React from "react";
import Header from "./Header";

interface Props {}
const DashboardLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div className="py-8 px-8">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
