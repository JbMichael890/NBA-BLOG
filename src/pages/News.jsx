import ImageOne from "../assets/svg/russell-westbrook-iso.avif";
import ImageTwo from "../assets/webp/jayson-tatum-ft-jalen-brunson.jpg";
import ImageThree from "../assets/svg/GettyImages-2163526286-scaled-e1722183130423.avif";
import ImageFour from "../assets/svg/GettyImages-2162235686-scaled-e1721530949427.avif";
import ImageFive from "../assets/webp/jayson-tatum-pregame-serbia.jpg";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase";
import styled from "styled-components";

const News = () => {
  const [getmyBase, setGetmyBase] = useState([]);
  const getData = async () => {
    const data = await getDocs(collection(db, "NBABLOG"));
    setGetmyBase(data.docs.map((myDoc) => ({ ...myDoc.data(), id: myDoc.id })));
  };

  useEffect(() => {
    getData();
  }, []);
  const Holder = [
    // {
    //   Image: `${ImageOne}`,
    //   title: "REPORT:WESTBROOK, NUGGETS AGREE TO DEAL",
    //   description:"Denver and veteran guard Russell Westbrook have agreed to a reported deal worth $6.8 million.",
    // },
    // {
    //   Image: `${ImageTwo}`,
    //   title: "OFFSEASON POWER RANKINGS:CELTICS LEAD EAST",
    //   description:"Get a team-by-team look at where all 15 squads in the Eastern Conference rank after a busy offseason.",
    // },
    // {
    //   Image: `${ImageThree}`,
    //   title: "OLYMPICS DAY 2: USA DEFEATS SERBIA IN OPENER",
    //   description:"Recap the Olympic action on July 28 featuring Team USA, Serbia, Puerto Rico and South Sudan.",
    // },
    // {
    //   Image: `${ImageFour}`,
    //   title: "NBA SIGNS NEW 11-YEAR MEDIA AGREEMENTS",
    //   description:"The new media deals with Walt Disney Company, NBCUniversal and Amazon will expand the reach of NBA telecasts.",
    // },
    // {
    //   Image: `${ImageFive}`,
    //   title: "KERR: TATUM 'WILL PLAY' IN TEAM USA'S NEXT GAME",
    //   description:"The Celtics star did not log a minute in Team USA's Olympic opener but is expected to get time in",
    // },
  ];
  console.log(getmyBase);
  return (
    <Container>
      <Wrapper>
        <nav>
          Daily<span>-NEWS</span>
        </nav>

        <CardHold>
          {Holder.map((data, i) => (
            <Card key={i}>
              <div>
                <img src={data.Image} alt="" />
              </div>
              <h3>{data.title}</h3>

              <p>{data.description}</p>
            </Card>
          ))}
        </CardHold>
        <CardHold>
          {getmyBase.map((data) => (
            <Card key={data.id}>
              <div>
                <img src={data.avatar} alt="" />
              </div>

              <h3>Title:{data.title}</h3>
              <Link to={`/details/${data.id}`}>
              
                <p>See more</p>
              </Link>
            </Card>
          ))}
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default News;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background-color: black;
  @media (max-width: 500px) {
    margin: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  flex-direction: column;
  nav {
    font-weight: 600;
    font-size: 35px;
    color: #1ba5e5;
  }
  span {
    color: #ffd4e7;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const CardHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  a {
    text-decoration: none;
  }
  img {
    width: 90%;
    height: 200px;
    object-fit: cover;

    &:hover {
      cursor: pointer;
      transform: scale(1.01);
      transition: all 350ms;
    }
    @media (max-width: 500px) {
      width: 70%;
    }
  }
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px;
  height: 300px;
  width: 250px;
  font-size: 14px;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  h3 {
    margin: 0px;
    margin-left: 3px;
    font-weight: 800;
    color: #FFCAD6;
    font-size: 16px;
  
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    color: #1ba5e5;
    margin: 1px;
    margin-left: 3px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
