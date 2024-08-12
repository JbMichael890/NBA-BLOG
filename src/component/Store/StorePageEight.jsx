import styled from "styled-components"
import Background from "../../assets/svg/fb_xlp2_desk_en.avif";

const StorePageEight = () => {
  return (
    <Container>

    </Container>
  )
}

export default StorePageEight
const Container = styled.div`
  background-image: url(${Background});
  min-height: 100vh;

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
    min-height: 85vh;
    
  }
  @media (max-width: 600px) {
    min-height: 75vh;
  }
  @media (max-width: 500px) {
    min-height: 50vh;
  }
`