import styled from "styled-components";
import NBA from "../assets/svg/logo-nba.svg";
import Swal from "sweetalert2";
import SideBar from "./SideBar";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const alertUser = () => {
    Swal.fire({
      title: "Update Coming",
      text: "The detail page is not yet available",
      icon: "info",
    });
  };

  const [toggle, setToggle] = useState(false);

  const getToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <LogoHold>
            <img src={NBA} alt="" />

            <h3>NBA-BLOG</h3>
          </LogoHold>
          <hr />

          <NavHold>
            <a href="/">
              <p>HOME</p>
            </a>
            <a href="/blog">
              <p>BLOG ▼</p>
            </a>
            <a href="/news">
              <p>NEWS ▼</p>
            </a>
            <a href="/entertainment">
              <p>ENTERTAINMENT ▼</p>
            </a>

            <p onClick={alertUser}>TEAMS </p>

            <p onClick={alertUser}>HISTORY </p>

            <p onClick={alertUser}>COMMUNITY ▼</p>
            <a href="/postblog">
              <p>POST-BLOG ▼</p>
            </a>
            <a href="/store">
              <p>NBA-STORE ▼</p>
            </a>
          </NavHold>
        </Wrapper>
        <Sidenav onClick={getToggle}>
          <MdOutlineMenu />
        </Sidenav>
      </Container>
      {toggle ? <SideBar /> : null}
    </div>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    background-color: blue;
    border: none;
    color: white;
    height: 30px;
    width: 130px;
    border-radius: 5px;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: 700;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h3 {
    color: #3f88c5;
  }
  img {
    width: 50px;
    margin-bottom: -20px;
  }
  hr {
    border: 1px solid #ddd;
    width: 80%;
  }
`;
const NavHold = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  p {
    &:hover {
      color: rgb(255, 202, 212);
    }
    &:active {
      color: #ffcbd4;
    }
  }
  @media (max-width: 990px) {
    display: none;
  }

  p {
    margin: 0px 10px;
    color: #48007b;
    /* font-weight: 500; */
    cursor: pointer;
    font-weight: 500;
    transition: all 350ms;
    font-family: Outfit;
    font-size: 14px;
    /* line-height: 60px; */
  }
  a {
    text-decoration: none;
  }
`;
const Sidenav = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: flex;
    font-size: 25px;
    cursor: pointer;
  }
`;
const LogoHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;
