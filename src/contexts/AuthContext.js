import { createContext, useContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();


const initialAutState = {
    accessToken: "",
    email: "",
    _id: ""
  };

export const AuthProvider = ({children}) => {
  const [user, setUser] = useLocalStorage('user', initialAutState);

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAutState);
  }

    return(
       <AuthContext.Provider value={{user, login, logout}}>
            {children}
       </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
};
