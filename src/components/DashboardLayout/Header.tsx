import { Badge, BadgeProps } from "@mui/material";
import React from "react";
import { BsBell } from "react-icons/bs";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -1,
    top: 18,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="flex flex-col gap-y-1 pt-4 pb-6 border-b border-[#EAECF0]">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <div className="relative">
          <StyledBadge
            badgeContent={4}
            color="error"
          >
            <BsBell className="text-xl" />
          </StyledBadge>
        </div>
      </div>
      <span className="text-raydaGrey-200 font-normal text-base">
        Your current sales auction and activity.
      </span>
    </header>
  );
};

export default Header;
