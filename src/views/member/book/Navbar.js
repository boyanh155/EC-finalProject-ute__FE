import React from "react";
import styled from "styled-components";
import { Navbar, NavbarBrand } from "reactstrap";
import "../../../assets/css/member/Navbar.css";

const BookWrapper = styled.div`
  width: 100%;
`;
const Book = (props) => {
  return (
    <BookWrapper>
      <Navbar className="nav-list" color="light" light expand="md">
        <NavbarBrand className="nav-item" onClick={() => props.setPage(0)}>
          <span className="nav-item-logo">Service booking</span>
        </NavbarBrand>
      </Navbar>
    </BookWrapper>
  );
};

export default Book;
