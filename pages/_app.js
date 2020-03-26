import React from "react";
import Router from "next/router";
import withGA from "next-ga";
import "tachyons";

import { gaCode } from "../helpers/analytics";
import "../public/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withGA(gaCode, Router)(MyApp);
