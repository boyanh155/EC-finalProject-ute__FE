import React, { Suspense, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/css/member/register.css";
import {
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  FormFeedback,
  FormText,
  Row,
  Col,
} from "reactstrap";
import { AuthContext } from "../../../contexts/AuthContext";
//pattern
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
const Index = () => {
  //Context
  const { loginUser } = useContext(AuthContext);
  //Router
  const navigate = useNavigate();

  //State
  //false is invalid
  //true is valid
  //string check
  const [check, setCheck] = useState();
  //email validation
  const validateEmail = (e) => {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(e.target.value != "admin"){
      if (emailRex.test(e.target.value)) {
        setCheck(true);
      } else if (!emailRex.test(e.target.value)) {
        setCheck(false);
      }
    }else{
      setCheck(true)
    }
    
    if (e.target.value === "") {
      setCheck(undefined);
    }
  };

  // Login handler
  //constructor
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  //get data from input
  const onChangeLoginForm = (e) =>
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  const { email, password } = loginForm;

  //onSubmit handler
  const handlerOnLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      console.log(loginData)
      if (loginData.success) {
        if(loginData.admin){
          navigate("/revenue");

        }else{

          navigate("/dashboard");
        }
      } else {
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="grid wide WrapperShop">
      <Form
        onSubmit={handlerOnLogin}
        className="formWrap"
        action="/api/auth/login"
        method="POST"
      >
        {/* Email input */}
        <Row className="my-4 justify-content-center">
          <Col className="relative-7 " md={8}>
            <FormGroup floating>
              <Input
                type="text"
                id="emailInput"
                placeholder="Email"
                onInput={(e) => validateEmail(e)}
                valid={check === true}
                invalid={check === false}
                name="email"
                required
                value={email}
                onChange={(e) => onChangeLoginForm(e)}
              />
              <Label style={{ color: "#ccc" }} htmlFor="emailInput">
                Your email
              </Label>
              <FormFeedback invalid>Incorrect email</FormFeedback>
              <FormFeedback valid>That look good</FormFeedback>
              <FormText>Email</FormText>
              {/* wrong email */}
            </FormGroup>
          </Col>
        </Row>
        {/* password */}
        <Row className="justify-content-center">
          <Col className="relative-7 " md={8}>
            <FormGroup floating>
              <Input
                type="password"
                id="passwordInput"
                placeholder="Pasword"
                name="password"
                required
                value={password}
                onChange={(e) => onChangeLoginForm(e)}
              />
              <Label style={{ color: "#ccc" }} htmlFor="emailInput">
                Your password
              </Label>
              <FormText>Password</FormText>
              {/* wrong email */}
            </FormGroup>
          </Col>
        </Row>

        <Row className="justify-content-center formBt relative-7">
          <Col md={7}>
            <FormGroup>
              <Button className="submit__bt" style={{}}>
                Submit
              </Button>
            </FormGroup>
          </Col>
          <Col md={1}>
            <Link to="/" className="cancel__bt" style={{}}>
              <span>Cancel</span>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Index;
