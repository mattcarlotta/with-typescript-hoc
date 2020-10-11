import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "../AppContext";
import type { FC } from "react";

type withAuthenticationFn = (Component: FC) => FC;

const withAuthentication: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { isAuthenticated } = useAppContext();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) router.push("/login");
    });

    return isAuthenticated ? <Component /> : null;
  };

  return Authenticated;
};

export default withAuthentication;
