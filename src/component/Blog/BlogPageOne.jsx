import styled from "styled-components";
import background from "../../assets/webp/NBA.webp";

const BlogPageOne = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default BlogPageOne;
const Container = styled.div`
  margin-top: 20px;
  background-image: url(${background});
  min-height: 100vh;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    margin-top: -50px;
    
  }
  @media (max-width: 500px) {
    margin-top: -130px;
  }
`;
const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* h1 {
    color: white;
    font-size: 90px;
    font-family: Monserrat;
  } */
`;
