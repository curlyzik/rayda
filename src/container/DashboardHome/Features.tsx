import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useGetRaydaFeaturesQuery } from "@/redux/services/featuresApi";
import { Bars } from "react-loader-spinner";

const Features = () => {
  const {
    data: getFeatures,
    isLoading,
    isFetching,
  } = useGetRaydaFeaturesQuery();
  const isFeaturesLoaded = isLoading || isFetching;

  return (
    <div className="p-6 shadow-auctionCardShadow rounded-xl border border-raydaGrey-100">
      <div className="flex justify-between pb-5 border-b items-center border-raydaGrey-100">
        <h3 className="text-lg font-semibold text-raydaBlack">
          Featured Items
        </h3>

        <Button
          variant="outlined"
          className="border-[#D0D5DD] text-raydaGrey-300 font-semibold text-sm capitalize py-2 rounded-lg"
        >
          View Auction
        </Button>
      </div>

      <div className="pt-6">
        {!isFeaturesLoaded ? (
          <div className="grid place-items-center pt-6">
            <Bars
              height="80"
              width="80"
              color="#004CCC"
              ariaLabel="bars-loading"
              wrapperClass=""
              visible={!isFeaturesLoaded}
            />
          </div>
        ) : (
          getFeatures?.data.map((feature) => (
            <div className="grid grid-cols-4 gap-6">
              <Card className="border border-[#D0D5DD] p-3 rounded-xl shadow-none min-w-[18.344rem] pb-2">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={feature.image}
                />
                <CardContent className="px-0 border-b border-raydaGrey-100 pb-3">
                  <div className="flex flex-col gap-y-3">
                    <div className="flex gap-x-2 items-center">
                      <Avatar className="bg-[#F2F4F7] text-raydaGrey-200 text-sm font-medium uppercase">
                        {`${feature.name?.[0]} ${feature.name?.[1]}`}
                      </Avatar>
                      <span className="text-raydaGrey-300 font-semibold text-xs">
                        {feature.name}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-raydaBlack">
                      {feature.title}
                    </div>
                    <div>
                      <span className="text-sm font-normal text-raydaGrey-300">
                        Current Bid:
                      </span>{" "}
                      <span className="font-bold text-sm text-raydaGrey-300">
                        {feature.bid}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardActions className="w-full px-0 pt-3">
                  <Button
                    size="large"
                    className="w-full bg-[#004CCC] text-sm font-semibold text-white normal-case rounded-lg"
                  >
                    Add to wishlist
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Features;
