import Header from "@/components/header/header";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen";
import { PageProvider } from "@/context/pageContext";
import PageLayout from "@/Layout/PageLayout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <PageLayout header={<Header />} main={<Component {...pageProps} />} />
      <LoadingScreen />
    </PageProvider>
  );
}
