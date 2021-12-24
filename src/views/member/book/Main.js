import React from "react";
import { Row, Col, Button } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroPic from "../../../assets/Book/BookHero.jpg";
import "../../../assets/css/member/Main.css";
const Main = (props) => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center">
        <Col>
          <p className="newStyle">Booking a new style</p>
          <Button
            color="none"
            className="book-table-bt"
            onClick={() => props.setPage(1)}
          >
            <span>Book</span>
          </Button>
        </Col>
      </Row>
      <Row className="text-center big-img-container">
        <Col>
          <LazyLoadImage src={HeroPic} className="heroPic big-img" />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
