import ReactGA from "react-ga";

export const gaCode = "UA-161907887-1";

ReactGA.initialize(gaCode);

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
