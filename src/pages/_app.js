import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    // <div data-theme="hds-web-product-light-theme" data-styles="hds" id="container">
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    // </div>

);
}
