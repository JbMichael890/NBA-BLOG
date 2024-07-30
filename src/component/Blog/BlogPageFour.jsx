import styled from "styled-components";
import Img1 from "../../assets/webp/basketball-arena-with-basketball-ball-ai-generation_201606-5316.avif";
import Img2 from "../../assets/avif/scene-from-basketball-match-court_23-2151098107.avif";

const BlogPageFour = () => {
  return (
    <Container>
      <Wrapper>
        <ImgOne>
          <img src={Img1} alt="" />
        </ImgOne>
        <ImgTwo>
          <img src={[Img2]} alt="" />
        </ImgTwo>
      </Wrapper>
    </Container>
  );
};

export default BlogPageFour;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  img {
    height: 450px;
    width: 600px;
    object-fit: cover;
    @media (max-width: 600px) {
      width: 100%;
      height: 350px;
    }
  }
`;
const ImgOne = styled.div`
  margin-right: 10px;
`;
const ImgTwo = styled.div`
  margin-left: 10px;
`;
