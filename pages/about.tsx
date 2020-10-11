import Head from "next/head";
import Link from "next/link";
import withAuthentication from "../components/withAuthentication";
import type { NextPage } from "next";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title> About - Next App</title>
    </Head>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default withAuthentication(AboutPage);
