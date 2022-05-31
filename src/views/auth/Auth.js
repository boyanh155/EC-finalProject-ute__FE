import React, { Suspense,useEffect } from "react";
import { Link,Navigate,useNavigate  } from "react-router-dom";
import styled from "styled-components";
import {useContext} from "react"
import Spinner from 'react-bootstrap/Spinner'
import Bg from "../../assets/Login/BG2.jpg";
import { AuthContext } from "../../contexts/AuthContext";
const LoginForm = React.lazy(() => import("../../components/Form/login"));
const RegisterForm = React.lazy(() => import("../../components/Form/register"));
const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  background-image: url(${Bg});
  background-position: center;
  background-size: cover;
  z-index: 1;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    width: 100vw;
    height: 100vh;
  }
  & > div {
    flex: 1;
  }
`;
const NavAuthPage = styled.h1`
  position: absolute;
  z-index: 10;
  color: white;
  transition: 0.1s all linear;
  &:hover {
    transition: 0.1s all linear;

    opacity: 0.5;
  }
`;
const Auth = ({ authName }) => {
  //mock data
  const {authState,authState:{authLoading,isAuthenticated}} = useContext(AuthContext)
  // refresh
  let body
  let navigate = useNavigate()
  let admin = false
  // data
  console.log(authState.user)
  if(authState.user){
    admin = authState.user.admin
  }
  // let admin = authState.user.admin || false
  console.log(authState)
  //Loading
  if(authLoading){
    <div className="d-flex justify-content mt-2">
        <Spinner animation="border" variant='info'></Spinner>
    </div>
  }
  //Pass
  else if(isAuthenticated){
    console.log(admin)
    if(!admin){
      navigate('/dashboard')
    }
    else{
      navigate('/revenue')
    }
  }

  body = (
    <>
            {isAuthenticated?(admin ?<Navigate to="/revenue" replace={true}/>:<Navigate to="/dashboard" replace={true}/>):(null)}

            {/* {(isAuthenticated&&admin) &&<Navigate to="/revenue" replace={true}/>}
            {(isAuthenticated&&!admin) &&<Navigate to="/dashboard" replace={true}/>} */}
              {authName === "login" && <LoginForm />}
          {authName === "register" && <RegisterForm />}
    </>
  )

  return (
    <>
      <Link to={authName === "login" ? "/register" : "/login"}>
        <NavAuthPage>
          {authName === "login" ? "Go to register" : "Go to login"}
        </NavAuthPage>
      </Link>
      <AuthWrapper>
        <Suspense fallback={<h1>Authenticator loading</h1>}>
          {body}
        </Suspense>
      </AuthWrapper>
    </>
  );
};

export default Auth;
