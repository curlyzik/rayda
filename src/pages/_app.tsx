import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "@/components/DashboardLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}
