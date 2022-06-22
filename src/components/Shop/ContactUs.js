import React, { Suspense, useState } from "react";
import "../../assets/css/shop/contact.css";
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
// pic
const ContactUs = () => {
  const [input, setInput] = useState({});
  const [check, setCheck] = useState();
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
  return (
    <Suspense className="CWrapper" fallback={<h1>Loading...</h1>}>
      <div className="CWrapper">
      <div className="centerWord">Contact Us</div>
      <div className="ContactWrapper">
        <Form action="/contact" method="POST">
          <Row className="ContactWrapper mx-4 justify-content-center">
            <Col className="ContactWrapper__left relative-7" md={5}>
              {/* email box */}
              <FormGroup floating>
                <Input
                  type="email"
                  id="emailInput"
                  placeholder="Enter your email"
                  name="email"
                  onInput={(e) => validateEmail(e)}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  valid={check === true}
                  invalid={check === false}
                />
                <Label style={{ color: "#ccc" }} htmlFor="emailInput">
                  example@gmail.com
                </Label>
                <FormFeedback invalid>Incorrect email</FormFeedback>
                <FormFeedback valid>That look good</FormFeedback>
                <FormText>Email</FormText>
              </FormGroup>
              {/* invoice box */}
            </Col>
            <Col className="ContactWrapper__right">{/* message box */}</Col>
          </Row>
        </Form>
      </div>
      </div>
     
    </Suspense>
  );
};

export default ContactUs;
