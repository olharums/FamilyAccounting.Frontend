import React, { createContext, useMemo } from "react";

import App from "./App";
import TransactionStore from "./store/TransactionStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);

const WrappedApp = function () {
  const stores = useMemo(
    () => ({
      user: new UserStore(),
      transactions: new TransactionStore(),
    }),
    []
  );

  return (
    <Context.Provider value={stores}>
      <App />
    </Context.Provider>
  );
};

export default WrappedApp;
