import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import styled from "styled-components";

const Details = () => {
  const { id } = useParams();
  const [getDescription, setGetDescription] = useState({});


  const getDetail = async (id) => {
    const mydata = await getDoc(doc(db, "NBABLOG", id));
    setGetDescription({ ...mydata.data(), id: mydata.id });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  console.log(getDescription);

  return (
    <Container>
      <Wrapper>
        <img src={getDescription.avatar} alt="" width="800" height="350" />

        <h1>Title: {getDescription.title} </h1>
        <p>Description: {getDescription.description}</p>
      </Wrapper>
    </Container>
  );
};

export default Details;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  background-color: #FFFFFF;
`;
const Wrapper = styled.div`
  width: 99%;
  img {
    object-fit: cover;
    
    @media (max-width: 691px) {
      width: 100%;
    }
  }
  h1{
   
    @media (max-width:768px) {
      font-size: 20px;
    }
  }
`;
