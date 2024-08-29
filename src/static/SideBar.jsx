import styled from "styled-components";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const alertUser = () => {
    Swal.fire({
      title: "Update Coming",
      text: "The detail page is not yet available",
      icon: "info",
    });
  };
  return (
    <Container>
      <Wrapper>
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

        <button onClick={alertUser}>SignUp</button>
      </Wrapper>
    </Container>
  );
};

export default SideBar;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  background-color: #1c1c1f;
  height: 73vh;
  width: 200px;
  color: indigo;
  font-weight: 800;
  p {
    /* color: #ddd; */
    cursor: pointer;
    font-weight: 500;
    margin-left: 10px;
    transition: all 350ms;
    &:hover {
      color: #ffcbd4;
    }
  }
  /* a {
    text-decoration: none;
  } */
  button {
    background-color: blue;
    border: none;
    color: white;
    height: 30px;
    width: 130px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 900;
    margin-left: 10px;
  }
`;
const MainNav = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: #ffcbd4;
  }
`;
