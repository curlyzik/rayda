import React from "react";
import { BsBell } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex flex-col gap-y-1 pt-4 pb-6 border-b border-[#EAECF0]">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <div className="relative">
          <BsBell className="text-xl" />
        </div>
      </div>
      <span className="text-[#475467] font-normal text-base">
        Your current sales auction and activity.
      </span>
    </header>
  );
};

export default Header;
