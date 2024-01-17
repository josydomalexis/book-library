import { createContext, useState } from "react";

const HimalayaTop = createContext();

const HimalayaBottom = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <HimalayaTop.Provider data={{ isAuthenticated }}>
      {children}
    </HimalayaTop.Provider>
  )
}