import styled from "styled-components";
import Image from "../../assets/png/nba_lp_package_page_gifting_modal_1160x870_no_lights.png";

const BlogPageSix = () => {
  return (
    <Container>
      <Wrapper>
        <ImgHol>
          {" "}
          <img src={Image} alt="" />
        </ImgHol>
        <TextHold>
          <h1>LEAGUE PASS WHEREVER YOU ARE THERE'S LEAGUE PASS</h1>
          <p>
            Watch live NBA action on your phone, computer, tablet, or smart TV.
          </p>
          <button>Subscribe</button>
        </TextHold>
      </Wrapper>
    </Container>
  );
};

export default BlogPageSix;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 20px;

  @media (max-width: 1066px) {
    flex-wrap: wrap;
    text-align: center;
  }
`;
const ImgHol = styled.div`
  img {
    width: 600px;
    @media (max-width: 768px) {
      width: 450px;
    }
  }
`;
const TextHold = styled.div`
button{
  background-color: #3f88c5;
}
  h1 {
    @media (max-width: 1120px) {
      font-size: 28px;
    }
  }
  button {
    cursor: pointer;
    width: 120px;
    height: 30px;
    font-weight: 600;
 
    border: none;
    color: #ddd;
  }
`;
