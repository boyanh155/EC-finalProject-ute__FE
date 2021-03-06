import React, { useState, Suspense, useEffect,useContext } from "react";
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
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import "../../../assets/css/member/register.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import CenterPic from "../../../assets/Login/BG2.jpg"
import { getRegion } from "../../../apis";
import Bg from "../../../assets/Login/BG2.jpg";
// context
import { AuthContext } from "../../../contexts/AuthContext";

const CountrySelector = React.lazy(() =>
  import("../../../components/Common/CountrySelector")
);
const RegisterWrapper = styled.div`
  // height:100vh;
  // display:flex;
  // align-items:center;
  // justify-content: center;
  // position:absolute;
  // top:50px;

  // background-image:url(${Bg});
  // background-position:center;
  // background-size:cover;
  // // z-index:1;
  // &::before{
  //     content:"";
  //     position:absolute;
  //     background-color:rgba(0,0,0,0.6);
  //     z-index:2;
  //     width: 100%;
  //     height: 100%;
  // }
`;
//pattern
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

const Index = () => {
  //router
  const navigate = useNavigate();
  // 
  const {registerUser} = useContext(AuthContext)
  //false is invalid
  //true is valid
  //string check
  const [check, setCheck] = useState();
  //num check
  const [numCheck, setNumCheck] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [pBar, setPBar] = useState(0);
  //list region
  const [listRegion, setListRegion] = useState([]);

  //get api country
  useEffect(() => {
    //getRegion
    getRegion()
      .then((res) => {
        setListRegion(res.data.results);
      })
      .catch((e) => console.log(e));
  }, []);
  //check password secure
  let keyN;
  let keyL;
  let keyU;
  //phone check
  const phoneCheck = (e) => {
    const regEx = /\b[0-9]+[0-9]\b/g;
    const value = e.target.value;
    if (!value.match(regEx)) {
      setNumCheck(false);
    } else if (value.match(regEx)) {
      setNumCheck(true);
    }
  };
  //password check
  const passwordCheck = (e) => {
    const passwordCheck = e.target.value;
    //lower
    if (passwordCheck.match(lowerCaseLetters)) {
      keyL = true;
    } else {
      keyL = false;
    }
    //upper
    if (passwordCheck.match(upperCaseLetters)) {
      keyU = true;
    } else {
      keyU = false;
    }
    //number
    if (passwordCheck.match(numbers)) {
      keyN = true;
    } else {
      keyN = false;
    }
    //check count
    let count = 0;
    if (keyL) {
      count++;
    } else {
      count = count === 0 ? count : count--;
    }
    if (keyU) {
      count++;
    } else {
      count = count === 0 ? count : count--;
    }
    if (keyN) {
      count++;
    } else {
      count = count === 0 ? count : count--;
    }
    setPBar(count * 30);
    if (passwordCheck.length > 8) setPBar(count * 30 + 10);
  };

  //email validation
  const validateEmail = (e) => {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      setCheck(true);
    } else if (!emailRex.test(e.target.value)) {
      setCheck(false);
    }
    if (e.target.value === "") {
      setCheck(undefined);
    }
  };
  //name validation
  const validator = (e, input) => {
    //validation
    const regEx = /\b[A-Za-z]+[A-Za-z]\b/g;
    const value = e.target.value;
    if (!value.match(regEx)) {
      if (input === "fname") setFName(false);
      else if (input === "lname") setLName(false);
    } else if (value.match(regEx)) {
      if (input === "fname") setFName(true);
      else if (input === "lname") setLName(true);
    }
    // 2way binding
    setRegisterForm({
      ...registerForm,
      [e.target.name]:e.target.value
    })}
  // Register handler
  //constructor
  const [registerForm, setRegisterForm] = useState({
    email:"", firstName:"", lastName:"", password :"",city:"",address:"",
  });
  // handle submit register
  const handlerRegister = async (e)=>{
    e.preventDefault();
    try {
      const registerData = await registerUser(registerForm);
      if (registerData.success) {
        navigate("/dashboard");
      } else {
      }
    } catch (error) {
      console.log(error.message); 
    }
  }
  return (
    <RegisterWrapper>
      {/* <LazyLoadImage
      width="900px"
      className="login__img"
      src={CenterPic}
      /> */}
      <div className="grid wide WrapperShop">
        <Form className="formWrap" action="/api/auth/register" method="POST"
                onSubmit={handlerRegister}
        >
          {/* Email input */}
          <Row className="my-3 justify-content-center">
            <Col className="relative-7 " md={8}>
              <FormGroup floating>
                <Input
                  type="email"
                  id="emailInput"
                  placeholder="Email"
                  name="email"
                  onInput={(e) => validateEmail(e)}
                  onChange={(e)=>setRegisterForm({
                    ...registerForm,
                    [e.target.name]:e.target.value
                  })}
                  valid={check === true}
                  invalid={check === false}
                />
                <Label style={{ color: "#ccc" }} htmlFor="emailInput">
                  example@gmail.com
                </Label>
                <FormFeedback invalid>Incorrect email</FormFeedback>
                <FormFeedback valid>That look good</FormFeedback>
                <FormText>Email</FormText>
                {/* wrong email */}
              </FormGroup>
            </Col>
          </Row>

          {/* First name input */}
          <Row className="my-3 justify-content-center">
            <Col className="relative-7 " md={4}>
              <FormGroup floating>
                <Input
                  id="fNameInput"
                  placeholder="First name"
                  name="firstName"
                  onChange={(e) => validator(e, "fname")}
                  valid={fName === true}
                  invalid={fName === false}
                  required
                />
                <Label style={{ color: "#ccc" }} htmlFor="fNameInput">
                  John
                </Label>
                <FormFeedback valid>Sweet!</FormFeedback>
                <FormFeedback invalid>Incorrect</FormFeedback>
                <FormText>First name</FormText>
              </FormGroup>
            </Col>
            <Col className="relative-7 " md={4}>
              <FormGroup floating>
                <Input
                  id="lNameInput"
                  placeholder="Last name"
                  name="lastName"
                  onChange={(e) => validator(e, "lname")}
                  valid={lName === true}
                  invalid={lName === false}
                  required
                />
                <Label style={{ color: "#ccc" }} htmlFor="lNameInput">
                  Kennedy
                </Label>
                <FormFeedback valid>Sweet!</FormFeedback>
                <FormFeedback invalid>Incorrect</FormFeedback>
                <FormText>Last name</FormText>
              </FormGroup>
            </Col>
          </Row>
          {/* Phone */}
          <Row className="my-3 justify-content-center">
            <Col className="relative-7" md={8}>
              <FormGroup floating>
                <Input
                  id="phoneInput"
                  type="phone"
                  name="phone"
                  placeholder="phone"
                  required
                  onChange={(e) => {
                  
                    phoneCheck(e)
                  setRegisterForm({
                      ...registerForm,
                      [e.target.name]:e.target.value
                    })
                  }}
                  valid={numCheck === true}
                  invalid={numCheck === false}
                />
                <Label htmlFor="passwordInput" style={{ color: "#ccc" }}>
                  0786791782
                </Label>
                <FormFeedback invalid>Incorrect phone number</FormFeedback>
                <FormFeedback valid>Correct phone number</FormFeedback>
                <FormText>Phone</FormText>
                <br />
              </FormGroup>
            </Col>
          </Row>
          {/* Region selector */}
          <Row className="my-3 justify-content-center relative-7 ">
            <Col md={8}>
              <Suspense fallback={<h1>Loading register</h1>}>
                <CountrySelector regions={listRegion} />
              </Suspense>
            </Col>
          </Row>

          {/* password */}
          <Row className="my-3 justify-content-center">
            <Col className="relative-7 " md={8}>
              {/* password input */}
              <FormGroup floating>
                <Input
                  id="passwordInput"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    passwordCheck(e)
                    setRegisterForm({
                      ...registerForm,
                      [e.target.name]:e.target.value
                    })
                  }}
                />
                <Label htmlFor="passwordInput" style={{ color: "#ccc" }}>
                  Something secret
                </Label>
                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                <FormText>Password</FormText>
                <br />
                <FormText className="recommendPassword">
                  <span>
                    Should include : upper, lower, numbers and more than 8
                    characters
                  </span>
                </FormText>
              </FormGroup>
              <FormGroup>
                <ProgressBar now={pBar} />
              </FormGroup>
            </Col>
          </Row>
          <Row className="my-3 justify-content-center formBt relative-7">
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
    </RegisterWrapper>
  );
};

export default Index;
