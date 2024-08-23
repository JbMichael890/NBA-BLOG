import { useState } from "react";
import styled from "styled-components";
import Image from "../../assets/svg/__0-313318851018.3692.svg";
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
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
`;
const ImageHold = styled.div`
  img {
    height: 100px;
    width: 200px;
    @media (max-width: 500px) {
      width: 50%;
    }
  }

  margin-right: 100px;
  @media (max-width: 500px) {
    margin-right: 5px;
  }
`;
const InputHold = styled.div`
  display: flex;
  input {
    height: 30px;
    width: 400px;
    outline: none;
    border: none;
    @media (max-width: 610px) {
      width: 100%;
    }
  }
`;
