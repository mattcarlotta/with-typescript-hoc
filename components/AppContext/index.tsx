import { createContext, useCallback, useContext, useState } from "react";
import type { FC, ReactNode } from "react";

type Context = {
  isAuthenticated: Boolean;
  handleAuthentication: () => void;
};

const AppContext = createContext<Context>({
  isAuthenticated: false,
  handleAuthentication: () => {},
});

const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);

  const handleAuthentication = useCallback(() => {
    setAuthentication((prevState) => !prevState);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        handleAuthentication,
      }}
    >
      {children}
      {isAuthenticated && (
        <button type="button" onClick={handleAuthentication}>
          Log out
        </button>
      )}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
