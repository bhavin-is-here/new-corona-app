import store from "@/redux/store";
import "@/styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    // <div data-theme="hds-web-product-light-theme" data-styles="hds" id="container">
    <Provider store={store}>
      <Head>
        <title>Tracking Coronavirus Covid-19</title>
        <meta name="description" content="Default description for all pages" />
      </Head>
      <Component {...pageProps} />
    </Provider>
    // </div>

);
}
