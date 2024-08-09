
import styled from "styled-components";
import { RiAdminFill } from "react-icons/ri";
import { LuClock5 } from "react-icons/lu";
import imageone from "../../assets/webp/medium-shot-man-playing-basketball_23-2150910748.avif";
import imageTwo from "../../assets/webp/basketball-tournament-flyer-social-media-banner-template_81761-579.avif";
import HeadImage from "../../assets/png/1891065796422075031.jpg";

const BlogPageTwo = () => {
  return (
    <Container>
      <HeaderImg>
        <img src={HeadImage} alt="" />
      </HeaderImg>
      <Wrapper>
        <CardOne>
          <a href="/blogone">
            <img src={imageone} alt="img" />
          </a>
          <p>
            <RiAdminFill />
            admin at <LuClock5 /> January 17,2024
          </p>
          <h1>Greatest of all time</h1>
        </CardOne>
        <CardTwo>
          <a href="/blogtwo">
            <img src={imageTwo} alt="img" />
            
          </a>
          <p>
            <RiAdminFill />
            admin at <LuClock5 /> August 17,2024
          </p>

          <h1>NBA just Sign 11yrs TV Contract with ESPN</h1>
        </CardTwo>
      </Wrapper>
    </Container>
  );
};

export default BlogPageTwo;
const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  h1{
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    font-family: Prata;
    color: rgb(25, 48, 92)
  }
  @media (max-width: 750px) {
    /* margin-top: -50px; */
    
  }
  @media (max-width: 500px) {
    /* margin-top: -190px; */
  }
`;
const HeaderImg = styled.div`
  margin-bottom: 10px;
  display: flex;
    justify-content: center;
    align-items: center;
   
  img {
    cursor: pointer;
    @media (max-width: 768px) {
    width: 90%;
    
  }
  }

`;
const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    width: 556px;
    height: 415px;
    object-fit: cover;
    cursor: pointer;
    @media (max-width: 580px) {
      width: 100%;
    }
  }
  flex-wrap: wrap;
`;
const CardOne = styled.div`
  margin-right: 5px;
`;
const CardTwo = styled.div`
  margin-left: 5px;
`;
