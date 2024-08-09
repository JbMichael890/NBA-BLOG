import styled from "styled-components"
import background from "../../assets/svg/store.jpg"

const StorePageTwo = () => {
  return (
    <Container>
        <Warpper>

        </Warpper>
    </Container>
  )
}

export default StorePageTwo
const  Container = styled.div`
 margin-top: 20px;
  background-image: url(${background});
  min-height: 100vh;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  @media (max-width: 750px) {
    /* margin-top: -50px; */
    
  }
  @media (max-width: 500px) {
    margin-top: 0px;
    min-height: 30vh;
    
  }
`;

const  Warpper = styled.div``