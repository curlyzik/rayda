import React from "react";
import AuctionCard from "./AuctionCard";
import Features from "./Features";

const DashboardHomeContainer = () => {
  return (
    <div className="pt-12">
      <div className="flex flex-col gap-y-6">
        <AuctionCard />
        <Features />
      </div>
    </div>
  );
};

export default DashboardHomeContainer;
