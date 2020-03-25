import React, { Component } from "react";
import Head from "next/head";
import Emoji from "../components/Emoji";

class HelloEmoji extends Component {
  componentDidMount() {
    setTimeout(() => this.props.onDestroy(), 1000);
  }
  render() {
    return (
      <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
        <Emoji className="hello-emoji" value="👋" size="200" />
      </div>
    );
  }
}

class Home extends Component {
  state = { isShowing: false };

  onClick = () => {
    this.setState({ isShowing: true });
  };

  onDestroy = () => this.setState({ isShowing: false });

  render() {
    const { isShowing } = this.state;
    return (
      <div className="container">
        <Head>
          <title>Buddy the Fish</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="body ibm-mono yellow pv3 ph3">
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

            <p className="lh-copy pt4">Today Buddy is 3 days old!</p>
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
