import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import moment from "moment";

import HelloEmoji from "../components/HelloEmoji";
import { logEvent } from "../helpers/analytics";

const birthday = moment("March 22, 2020 03:00:00");

class Home extends Component {
  state = { isShowing: false };

  onClick = () => {
    logEvent("User has clicked action", "Hello Buddy");
    this.setState({ isShowing: true });
  };

  onDestroy = () => this.setState({ isShowing: false });

  render() {
    const { isShowing } = this.state;
    const daysOld = moment().diff(birthday, "days") + 1;
    return (
      <div className="ibm-mono yellow">
        <Head>
          <title>Buddy the Fish</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="flex items-center justify-end mw7 center pv3">
          <Link href="/letters">
            <a className="yellow ibm-mono">Letters</a>
          </Link>
        </div>
        <div className="pv4 ph3">
          <div className="mw8 center tc">
            <h1 className="title">This is buddy... the fish</h1>

            <div className="relative">
              {isShowing && <HelloEmoji onDestroy={this.onDestroy} />}
              <iframe
                type="text/html"
                frameBorder="0"
                src="//video.nest.com/embedded/live/bIRawNqM3D?autoplay=1"
                allowFullScreen
              ></iframe>
            </div>

            <p className="lh-copy pt4">Today Buddy is {daysOld} days old!</p>
            <p className="lh-copy pb3">
              Buddy is here to give us emotional support during today's times.
              <br />
              This is your buddy, our buddy, the buddy we go to for comfort.{" "}
              <br />
              Let's be optimistic together.
            </p>

            <button
              onClick={this.onClick}
              className="br-pill pv2 ph3 bg-purple b--yellow bw1 yellow"
            >
              👋 Hi Buddy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
