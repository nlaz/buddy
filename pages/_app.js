import React from "react";

import "tachyons";
import "../public/index.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
