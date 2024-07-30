import styled from "styled-components";
import Image from "../assets/svg/pexels-rdne-8336918.jpg";
const BlogPageImage = () => {
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

export default BlogPageImage;
const Container = styled.div`
  background-image: url(${Image});
  min-height: 100vh;
  margin: 30px 0px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

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
    color: rgb(37 99 235);
    @media (max-width: 610px) {
      font-size: 20px;
    }
  }
`;
