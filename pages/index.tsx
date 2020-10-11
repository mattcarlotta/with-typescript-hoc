import Link from "next/link";
import Head from "next/head";
import withAuthentication from "../components/withAuthentication";

const IndexPage = () => (
  <>
    <Head>
      <title> Dashboard - Next App</title>
    </Head>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </>
);

export default withAuthentication(IndexPage);
