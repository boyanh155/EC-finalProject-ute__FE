import { createContext, useReducer, useEffect } from "react";
//3 step for useContext
//In Context file
//1. createContext
//2. function Provider
//UseContext
//3. Consumer
export const PersonalContext = createContext();

const PersonalContextProvider = ({ children }) => {
  const [styleState, dispatch] = useReducer(authReducer,{
    authLoading:true,
    isAuthenticated:false,
    user:null,
});
  //

  //Load immediately after app start
  useEffect(() => {
  }, []);

  //Context data
  const personalContextData = { styleState };
  //return Provider
  return (
    <AuthContext.Provider value={personalContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default PersonalContextProvider;
