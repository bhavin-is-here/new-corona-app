import Seo from "@/components/modals/Seo";
import store from "@/redux/store";
import "@/styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    // <div data-theme="hds-web-product-light-theme" data-styles="hds" id="container">
    <Provider store={store}>
        {/* <Seo/> */}
        <meta name="description" content="Default description for all pages" />
      
      <Component {...pageProps} />
    </Provider>
    // </div>

);
}
