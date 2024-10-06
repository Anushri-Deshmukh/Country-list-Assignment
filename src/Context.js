import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
