import One from "../../assets/svg/DESK_MN_EN.avif";
import Two from "../../assets/svg/DESK_NE_EN.avif";
import Three from "../../assets/svg/DESK_NIKE_EN.avif";
import Four from "../../assets/svg/DESK_STANCE_EN.webp";
import Five from "../../assets/svg/DESK_WILSON_EN.avif";
import styled from "styled-components";

const StorePageNine = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>BRANDS ON NBA STORE</h1>
        </Header>
        <Holder>
          <ImageOne>
            <img src={One} alt="" />
          </ImageOne>
          <ImageTwo>
            <img src={Two} alt="" />
          </ImageTwo>
          <ImageThree>
            <img src={Three} alt="" />
          </ImageThree>
          <ImageFour>
            <img src={Four} alt="" />
          </ImageFour>
          <ImageFive>
            <img src={Five} alt="" />
          </ImageFive>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default StorePageNine;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 98%;
  flex-wrap: wrap;
`;
const Header = styled.div`
  width: 100%;
  background-color: black;
  margin-bottom: 10px;
  color: white;
  @media (max-width: 500px) {
    width: 95%;
  }
  h1 {
    @media (max-width: 500px) {
      font-size: 26px;
    }
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;
const ImageOne = styled.div`
  margin: 0px 5px;
`;
const ImageTwo = styled.div`
  margin: 0px 5px;
`;
const ImageThree = styled.div`
  margin: 0px 5px;
`;
const ImageFour = styled.div`
  margin: 0px 5px;
`;
const ImageFive = styled.div`
  margin: 5px 5px;
`;
