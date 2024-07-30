import styled from "styled-components"
import Image from "../../assets/webp/GettyImages-2162470771-scaled.webp"

const BlogPageSeve = () => {
  return (
    <Container>
        <Wrapper>
        <nav>NBA 2K25 SUMMER LEAGUE: HEAT WIN TITLE GAME THRILLER</nav>
            <img src={Image} alt="" />
  
            <p>Josh Christopher earns title game MVP honors as Pelle Larsson's game-winner lifts the Heat to the NBA 2K25 championship over Memphis.</p>
        </Wrapper>
    </Container>
  )
}

export default BlogPageSeve
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 30px;
`
const Wrapper = styled.div`
text-align: center;

img{
    width: 100%;
    object-fit: cover;
}
nav {
    
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    font-family: Prata;
    color: rgb(25, 48, 92)
    ;
}
`