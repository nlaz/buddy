import React from "react";
import Head from "next/head";
import Link from "next/link";
import csv from "csvtojson";
import letters from "../data/letters.json";
import moment from "moment";

const LetterItem = ({ letter }) => (
  <div className="mb4 lh-copy">
    {letter["Name"]} {letter["Last Initial"]} - {letter["Message"]} -{" "}
    {letter["Created At"]}
  </div>
);

const Letters = ({ letters }) => (
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
      <Link href="/">
        <a className="yellow ibm-mono">Back</a>
      </Link>
    </div>
    <div className="pv5 ph3 mw7 center">
      {letters
        .sort(
          (a, b) =>
            moment(new Date(b["Created At"])) -
            moment(new Date(a["Created At"]))
        )
        .map((i, key) => (
          <LetterItem letter={i} key={key} />
        ))}
      <hr className="mb4" />
      <a href="https://airtable.com/shr4Fp80xMFToqYcA" className="yellow">
        Write your own
      </a>
    </div>
  </div>
);

Letters.getInitialProps = async function() {
  // const json = await csv().fromFile("./data/letters.json");

  return { letters: letters };
};

export default Letters;
