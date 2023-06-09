import { BASE_URL } from "@/utils/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { iFeature } from "../../../typings/features";

export const featuresApi = createApi({
  reducerPath: "featuresApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getRaydaFeatures: builder.query<
      { success: boolean; message: string; data: iFeature[] },
      void
    >({
      query: () => "/7f02819f-8254-410a-b8af-ab98572bd26b",
    }),
  }),
});

export const { useGetRaydaFeaturesQuery } = featuresApi;
