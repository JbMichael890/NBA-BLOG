import styled from "styled-components";

import imageOne from "../../assets/webp/front-view-young-man-playing-basketball-outdoors_23-2148767565.avif";

import Background from "../../assets/webp/pexels-photo-1045534.jpeg";

const HomePageTwo = () => {
  return (
    <Container>
      <Wrapper>
        <Wait>
          {/* <h1>MEMORY</h1> */}
          <p>Basketball is a prominent and well-liked sport played all over the world.</p>
        </Wait>
        <ImageHold>
          <Take>
            <img src={imageOne} alt="img" />
          </Take>
          <Holder style={{ backgroundImage: `url(${Background})` }}>
            <TextHold>
              <h2>Score Big This Season</h2>
            </TextHold>
          </Holder>
        </ImageHold>
      </Wrapper>
    </Container>
  );
};

export default HomePageTwo;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 1044px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
 
`;
const Holder = styled.div`
  margin-left: 10px;
  height: 500px;
  width: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width:1044px) {
      /* margin-bottom: 10px; */
      width: 100%;
    }
    @media (max-width:500px) {
      /* margin-bottom: 10px; */
      width: 100%;
    }
`;
const TextHold = styled.div`
  display: flex;
  align-items: flex-end;
  
  height: 100%;
  h2 {
    font-family: Prata;
    font-weight: 400;
    font-size: 40px;

  }
`;

const Take = styled.div`
  
  img {
    height: 500px;
    object-fit: cover;
    @media (max-width:1044px) {
      margin-bottom: 10px;
      width: 100%;
    }
  } 
`;
const Wait = styled.div`
  p {
    
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    font-family: Prata;
    color: rgb(25, 48, 92)
    ;
    @media (max-width:500px) {
      font-size: 30px;
    }
  }
`;
const ImageHold = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
