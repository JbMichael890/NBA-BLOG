import styled from "styled-components";
import NBA from "../assets/svg/logo-nba.svg";
import Swal from "sweetalert2";
import SideBar from "./SideBar";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <MainNav to="/">
              <p>HOME</p>
            </MainNav>
            <MainNav to="/blog">
              <p>BLOG ▼</p>
            </MainNav>
            <MainNav to="/news">
              <p>NEWS ▼</p>
            </MainNav>
            <MainNav to="/entertainment">
              <p>ENTERTAINMENT ▼</p>
            </MainNav>

            <p onClick={alertUser}>TEAMS </p>

            <p onClick={alertUser}>HISTORY </p>

            <p onClick={alertUser}>COMMUNITY ▼</p>
            <MainNav to="/postblog">
              <p>POST-BLOG ▼</p>
            </MainNav>
            <MainNav to="/store">
              <p>NBA-STORE ▼</p>
            </MainNav>
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
  color: #48007b;
  @media (max-width: 990px) {
    display: none;
  }

  p {
    margin: 0px 10px;
    cursor: pointer;
    font-weight: 500;
    transition: all 350ms;
    font-family: Outfit;
    font-size: 14px;
    &:hover {
      color: rgb(255, 202, 212);
    }
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
const MainNav = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: #ffcbd4;
  }
`;
