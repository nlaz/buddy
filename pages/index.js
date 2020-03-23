import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>Buddy the Fish</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap"
        rel="stylesheet"
      />
    </Head>

    <body className="ibm-mono yellow pv3 ph3">
      <div className="mw8 center tc">
        <h1 className="title">This is buddy... the fish</h1>

        <iframe
          type="text/html"
          frameborder="0"
          src="//video.nest.com/embedded/live/bIRawNqM3D?autoplay=1"
          allowFullscreen
        ></iframe>

        <p className="lh-copy pt4">Today Buddy is 1 day old!</p>
        <p className="lh-copy">
          Buddy is here to give us emotional support during today's times.
          <br />
          This is your buddy, our buddy, the buddy we go to for comfort. <br />
          Let's be optimistic together.
        </p>
      </div>
    </body>
  </div>
);

export default Home;
