import AppContextProvider from "../components/AppContext";
import type { FC } from "react";
import type { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
);

export default App;
