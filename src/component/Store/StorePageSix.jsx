import Background from "../../assets/svg/desk_suba_city_en.avif";
import styled from "styled-components";

const StorePageSix = () => {
  return <Container></Container>;
};

export default StorePageSix;
const Container = styled.div`
  background-image: url(${Background});
  min-height: 57vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;

  @media (max-width: 800px) {
    margin-top: 0px;
    min-height: 35vh;
  }
  @media (max-width: 600px) {
    min-height: 25vh;
  }
  @media (max-width: 500px) {
    min-height: 20vh;
  }
`;
