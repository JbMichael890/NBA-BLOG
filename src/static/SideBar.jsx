import styled from "styled-components";
import Swal from "sweetalert2";
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
        <a href="/blog">
          <p >HOME</p>
        </a>

        <a href="/">
          <p>BLOG ▼</p>
        </a>
        <a href="/news">
        <p>NEWS </p>
        </a>

        <p onClick={alertUser}>TEAMS ▼ </p>

        

        <p onClick={alertUser}>ENTERTAINMENT </p>

        <p onClick={alertUser}>HISTORY ▼ </p>

        <p onClick={alertUser}>COMMUNITY</p>

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
  height: 50vh;
  width: 200px;
  color: indigo;
  font-weight: 800;
  p {
    /* margin: 0px 10px; */
    color: #48007b;
    cursor: pointer;
    font-weight: 500;
    margin-left: 10px;
    transition: all 350ms;
    &:hover {
      color: #ffcbd4;
    }
  }
  a {
    text-decoration: none;
  }
  button {
    background-color: blue;
    border: none;
    color: white;
    height: 30px;
    width: 130px;
    border-radius: 5px;
    cursor: pointer;
    /* font-family: Montserrat; */
    font-weight: 900;

    margin-left: 10px;
  }
`;
