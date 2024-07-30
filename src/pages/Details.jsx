import styled from "styled-components";
import Image from "../assets/webp/jayson-tatum-pregame-serbia.jpg"

const Details = () => {
  return (
    <Container>
      <Wrapper>
        <img src={Image} alt="" />
        <Title>
         <h3>KERR: TATUM 'WILL PLAY' IN TEAM USA'S NEXT GAME</h3>
        </Title>
        <Description>
          <p>The Celtics star did not log a minute in Team USA's Olympic opener but is expected to get time in</p>
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
const Wrapper = styled.div``;
const Title = styled.div``
const Description = styled.div``
