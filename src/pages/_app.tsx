import Header from "@/components/header/header";
import PageLayout from "@/Layout/PageLayout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <PageLayout header={<Header />} main={<Component {...pageProps} />} />;
}
