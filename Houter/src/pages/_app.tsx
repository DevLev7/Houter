import { AppProps } from "next/app";

const HouterApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default HouterApp;
