import styled from "styled-components";
// import Image from "../assets/webp/jayson-tatum-pregame-serbia.jpg";
import { Link, useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <Wrapper>
        <img src="" alt="" height="412" width="735px"/>
        <Title>
          {/* <h3>KERR: TATUM 'WILL PLAY' IN TEAM USA'S NEXT GAME</h3> */}
        </Title>
        <Description>
          {/* <Link to={`/details/${data.id}`}></Link> */}
          <p>See more</p>
        </Description>
      </Wrapper>
    </Container>
  );
};

export default Details;
const Container = styled.div`
  margin-top: 30px;
  margin-left: 10px;
`;
const Wrapper = styled.div`
  img {
    @media (max-width: 752px) {
      width: 100%;
    }
  }
`;
const Title = styled.div``;
const Description = styled.div``;
