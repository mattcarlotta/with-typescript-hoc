import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "../components/AppContext";
import type { NextPage } from "next";

const Login: NextPage = () => {
  const { isAuthenticated, handleAuthentication } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title> Login - Next App</title>
      </Head>
      <button type="button" onClick={handleAuthentication}>
        Log in
      </button>
    </>
  );
};

export default Login;
