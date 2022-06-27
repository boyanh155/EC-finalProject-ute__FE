import React, { Suspense, useState,useRef } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
  // form e
  const formE = useRef(null)
  // state
  //email,invoice,message,issue
  const [input, setInput] = useState({});
  // email
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
  // Handle submit
  const submitHandler = async ()=>{
    console.log("Submit Contact")
  }
  return (
    <Suspense className="CWrapper" fallback={<h1>Loading...</h1>}>
      <div className="CWrapper">
      <div className="centerWord">Contact Us</div>
      <div className="ContactWrapper">
        <Form ref={formE} inline action="/contact" method="POST" onSubmit={submitHandler}>
          <Row className="ContactWrapper mx-4 justify-content-space-between">
            {/* Col left */}
            <Col className="ContactWrapper__left relative-7" md={4}>
              {/* Row 1 - email box */}
              
              <Row>
              <FormGroup floating>
                <Input
                  type="email"
                  id="emailInput"
                  placeholder="Enter your email"
                  name="email"
                  value={input.email}
                  onInput={(e) => validateEmail(e)}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  valid={check === true}
                  invalid={check === false}
                />
                <Label style={{ color: "#ccc" }} htmlFor="emailInput">
                  example@gmail.com
                </Label>
                {/* <FormFeedback invalid>Incorrect email</FormFeedback> */}
                {/* <FormFeedback valid>That look good</FormFeedback> */}
                <FormText>Email</FormText>
              </FormGroup>
              </Row>
                {/*  */}
              {/* Row 2 - invoice box */}
              <Row>
                <FormGroup floating>
                  <Input
                  type="text"
                  id="invoiceInput"
                  placeholder="Enter invoice ID"
                  name="invoice"
                  value={input.invoice}

                  onInput={e=>{
                    setInput({
                      ...input,
                      [e.target.name]:e.target.value
                    }
                    )
                  }}
                  >
                  
                  </Input>
                  <Label style={{ color: "#ccc" }} htmlFor="invoiceInput">
                  example@gmail.com
                </Label>
                <FormFeedback invalid>Incorrect ID</FormFeedback>
                <FormFeedback valid>Nice!</FormFeedback>
                <FormText>Invoice ID</FormText>

                </FormGroup>
              </Row>
            </Col>
              {/* Col middle */}
              <Col className="ContactWrapper__right" md={4}>
              {/* message box */}
            <FormGroup floating>
              <Input
              id="messageInput"
              name="message"
              value={input.message}
              type="textarea"
              style={{height:"156px",resize:"none"}}
              onInput={e=>{
                setInput({
                  ...input,
                  [e.target.name]:e.target.value
                }
                )
              }}
              >
              </Input>
              <Label
              style={{ color: "#ccc"}}
              htmlFor="messageInput"
              >
                Enter your message
              </Label>
              <FormText>Message</FormText>

            </FormGroup>  
            </Col>
            {/* Col right */}
            <Col className="ContactWrapper__middle" md={4}>
              {/* Select issue */}
              {/* Row 1 - select issue */}
              <Row>

              <FormGroup>
                <Input
                id="issueInput"
                bsSize="lg"
                name="issue"
                type="select"
                multiple
                onInput={e=>{
                  setInput({
                    ...input,
                    [e.target.name]:e.target.value
                  }
                  )
                }}
                style={{height:"92px"}}
                >
                  <option selected="selected">Phản hồi dịch vụ tệ</option>
                  <option>Phản hồi trang web tệ </option>
                  <option>Góp ý về hoạt động</option>
                  <option>Liên lạc công việc</option>
                  <option>Tìm thông tin của cửa hàng</option>
                  <option>Đánh giá sản phẩm</option>
                  <option>Khác...</option>
                </Input>
                  <FormText>
                    Issue
                  </FormText>
              </FormGroup>
              </Row>
              {/* Row 2 - button */}
                  <Row className="buttonWrap" >
                    <Col md={2}>
                      <Button color="primary" >
                        Send
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button color="primary" 
                      onClick={e=>{
                        e.preventDefault()
                          //email,invoice,message,issue
                        setInput({  
                          email:"",
                          invoice:"",
                          message:"",
                        })
                        // formE.current.reset()
                      }}
                      >
                        Reset
                      </Button>
                    </Col>
                  </Row>

            </Col>

          </Row>
        </Form>
      </div>
      </div>
    </Suspense>
  );
};

export default ContactUs;
