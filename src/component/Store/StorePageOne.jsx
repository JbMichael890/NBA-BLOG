import { useState } from "react";
import styled from "styled-components";
import Image from "../../assets/svg/__0-313318851018.3692.svg"
import { CiSearch } from "react-icons/ci";
const StorePageOne = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Wrapper>
        <ImageHold>
          <img src={Image} alt="" />
        </ImageHold>
        <InputHold>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            
            placeholder="Search"
            
          />
          <CiSearch />
        </InputHold>
      </Wrapper>
    </Container>
  );
};

export default StorePageOne;
const Container = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
  


  `;
const Wrapper = styled.div`
width: 95%;
display: flex;
  /* justify-content: center; */
  align-items: center;
  
  @media (max-width: 739px) {
    display: flex;
  justify-content: center;
  align-items: center;
  }
  @media (max-width: 500px) {
    
  }
`;
const ImageHold = styled.div`
img{
  height: 100px;
  width: 200px;
}
margin-right: 100px;
`;
const InputHold = styled.div`
input{
  height: 30px;
  width: 400px;
  outline: none;
  border: none;
@media (max-width: 750px) {
  width: 250px;
}
@media (max-width:  610px) {
  width: 150px;
}
@media (max-width: 500px) {
  width: 70px;
  /* margin-right: 40px; */
  
}
}

`;
