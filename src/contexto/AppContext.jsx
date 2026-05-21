/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <AppContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default AppContextProvider;
