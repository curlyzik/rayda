import { Inter } from "next/font/google";
import dashboardGradient from "@/assets/dashboardGradient.svg";
import content from "@/assets/content.svg";
import { FiThumbsUp } from "react-icons/fi";
import { Button } from "@mui/material";

const AuctionCard = () => {
  return (
    <div className="p-6 md:pb-32 shadow-auctionCardShadow rounded-xl border border-[#EAECF0]">
      <div className="relative">
        <img
          src={dashboardGradient.src}
          className="rounded-xl hidden md:block"
        />
        <div className="md:px-7 relative md:absolute items-center gap-x-2 md:-translate-y-12 w-full flex">
          <img src={content.src} className="hidden md:block" />
          <div className="w-full md:block flex flex-col">
            <div className="flex flex-col md:flex-row gap-y-2 md:pt-4 justify-between items-center w-full mb-2">
              <div className="md:text-2xl text-raydaBlack font-semibold">
                Starts in: 3 days : 2 hours : 24 minutes
              </div>
              <div className="md:m-0 mt-4">
                <Button
                  variant="outlined"
                  startIcon={<FiThumbsUp />}
                  className="border-[#D0D5DD] text-raydaGrey-300 font-semibold text-sm capitalize py-2 rounded-lg"
                >
                  Accept Invite
                </Button>
              </div>
            </div>
            <div className="flex gap-4 pl-3 items-center order-first">
              <div className="flex gap-x-2 items-center">
                <div className="h-[0.375rem] w-[0.375rem] bg-[#F79009] rounded-full" />
                <span className="text-[#B54708] text-sm font-medium">
                  Not Live
                </span>
              </div>
              <span className="text-base font-normal text-[#475467]">
                Layers Auction
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
