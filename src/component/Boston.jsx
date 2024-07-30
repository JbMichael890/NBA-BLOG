import styled from "styled-components";
import Background from "../../assets/png/16x9-19-2.png";
const Boston = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Boston;
const Container = styled.div`
  background-image: url(${Background});
  min-height: 100vh;
  margin-bottom: 20px;
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
    margin-top: -250px;
  }
`;
const Wrapper = styled.div``;
