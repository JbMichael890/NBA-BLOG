import styled from "styled-components";
import Image from "../../assets/png/pexels-biabrg-16933685.jpg";
import ImageTwo from "../../assets/png/pexels-biabrg-16933684.jpg";
const HomePageThree = () => {
  return (
    <Container>
    <nav>o <span>BLOG</span></nav>
      <main>Related post</main>
      <Wrapper>
        <HolderOne>
          <img src={Image} alt="" />
        </HolderOne>
        <hr />
        <HolderTwo>
          {/* <h3>USA BASKEBALL</h3> */}
          <Card>
            <img src={ImageTwo} alt="" />
          </Card>
        </HolderTwo>
      </Wrapper>
      <p>A couple of guys born in Acron</p>
    </Container>
  );
};

export default HomePageThree;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
  span{
    font-size: 13px;
    font-weight: 600;
  }
  nav{
    font-size: 15px;
    font-weight: 500;
  }
  p {
    font-size: 20px;
    font-weight: 400;
/* margin-top: -20px; */
    font-family: Prata;
  }
  main{
    font-size: 50px;
    font-weight: 400;
    font-family: Prata;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  hr {
    border: 1px solid #ddd;
    height: 600px;
    @media (max-width: 1280px) {
      display: none;
    }
  }
  img {
    height: 600px;
    width: 500px;
    object-fit: cover;
  }
  @media (max-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    img {
      width: 100%;
      height: 500px;
    }
  }
`;
const HolderOne = styled.div``;
const HolderTwo = styled.div``;
const Card = styled.div``;
