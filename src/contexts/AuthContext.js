import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constant";
import setAuthToken from "../utils/setAuthToken";
//3 step for useContext
//In Context file
//1. createContext
//2. function Provider
//UseContext
//3. Consumer
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  //Authenticate user
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      //set access token to request to check route
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    //1 chance for authenticated
    try {
      //pass
      const res = await axios.get(`${apiUrl}/auth`);
      if (res.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: res.data.user,
          },
        });
      }
      console.log("authState:", authState);
    } catch (e) {
      //delete all access token in local storage
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      //delete in header req
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  //Load immediately after app start
  useEffect(() => {
    loadUser();
  }, []);

  //Login function
  const loginUser = async (userForm) => {
    try {
      // send
      const resp = await axios.post(`${apiUrl}/auth/login`, userForm);

      if (resp.data.success) {
        //save access token to client side
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, resp.data.accessToken);
        //return data
        return resp.data;
      }
    } catch (error) {
      if (error.resp) {
        return error.resp.data;
      } else return { success: false, message: error.message };
    }
  };
  //Register function
  const registerUser = async (userForm) => {
    try {
      // send
      const resp = await axios.post(`${apiUrl}/auth/register`, userForm);

      if (resp.data.success) {
        //save access token to client side
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, resp.data.accessToken);
        //return data
        return resp.data;
      }
    } catch (error) {
      if (error.resp) {
        return error.resp.data;
      } else return { success: false, message: error.message };
    }
  };
  //Context data
  const authContextData = { loginUser,registerUser, authState };
  //return Provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
