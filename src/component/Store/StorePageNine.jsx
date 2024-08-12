import image from "../../assets/svg/DESK_BRANDS.avif"
import ImageOne from "../../assets/svg/DESK_MN_EN.avif"
import ImageTwo from "../../assets/svg/DESK_NE_EN.avif"
import ImageThree from "../../assets/svg/DESK_NIKE_EN.avif"
import ImageFour from "../../assets/svg/DESK_STANCE_EN.webp"
import ImageFive from "../../assets/svg/DESK_WILSON_EN.avif"
import styled from 'styled-components'

const StorePageNine = () => {
  return (
    <Container>
        <Wrapper>
        <img src={image} alt="" />
            <Holder>
         
                <img src={ImageOne} alt="" />
                <img src={ImageTwo} alt="" />
                <img src={ImageThree} alt="" />
                <img src={ImageFour} alt="" />
                <img src={ImageFive} alt="" />
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default StorePageNine
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 98%;
text-align: center;
flex-wrap: wrap;
`
const Holder = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 98%;
/* flex-wrap: wrap; */

cursor: pointer;
`