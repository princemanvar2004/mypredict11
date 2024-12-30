import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Mobilemenu from "./Mobilemenu";

const Header = () => {
  return (
    <div>
      <Container>
        <Logo>
          <Link to="/">
            <img src="img/logo.png" alt="logo"></img>
          </Link>
        </Logo>
        <Mobilemenu />
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 540px) {
    height: 65px;
  }
`;
const Logo = styled.div`
  img {
    width: 350px;
    height: 70px;
    @media (max-width: 1126px) {
      width: 300px;
      height: 60px;
    }
    @media (max-width: 980px) {
      width: 250px;
      height: 50px;
    }
    @media (max-width: 540px) {
      width: 200px;
      height: 45px;
    }
  }
`;
export default Header;
