import styled from "styled-components";
import Background from "../../assets/svg/desk.jpg";

const StorePageFour = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default StorePageFour;
const Container = styled.div`
  background-image: url(${Background});
  min-height: 60vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;

  @media (max-width: 500px) {
    margin-top: 0px;
    min-height: 20vh;
  }
`;
const Wrapper = styled.div``;
