import { createContext, useState } from "react";

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const GlobalProvider = ({ children }) => {
  const [Username, setUsername] = useState();

  return (
    <Provider
      value={{
        Username,
        setUsername,
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalContext, GlobalProvider };
