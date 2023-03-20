import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "@/components/DashboardLayout";
import { Provider } from "react-redux";
import store from "@/redux/app/store";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rayda Dashboard</title>
      </Head>
      <Provider store={store}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </Provider>
    </>
  );
}
