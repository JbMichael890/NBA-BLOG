import styled from "styled-components";
import Background from "../assets/svg/pexels-viridianaor-13462647.jpg";

const BlogPageImageTwo = () => {
  return (
    <Container>
      <Wrapper>
      <nav>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipisicing elit.
        </nav>
      </Wrapper>
    </Container>
  );
};

export default BlogPageImageTwo;
const Container = styled.div`
  background-image: url(${Background});
  min-height: 100vh;
margin: 30px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 650px) {
    margin-top: -100px;
    margin-bottom: -100px;
  }
`;
const Wrapper = styled.div`
  nav {
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    font-family: Prata;
    color: #3f88c5;
    @media (max-width: 610px) {
      font-size: 20px;
    }
  }
`;
