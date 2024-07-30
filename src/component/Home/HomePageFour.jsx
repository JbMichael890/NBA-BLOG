import styled from "styled-components";
import ImageOne from "../../assets/jpg/448459963_2670889826405426_3961671238848420719_n.jpg";
import ImageTwo from "../../assets/jpg/448947651_10212966749721256_8811155461410694518_n.jpg";
import ImageThree from "../../assets/jpg/296551089_3234521163431808_6405105952489337446_n.jpg";
import ImageFour from "../../assets/jpg/343326790_1166048934062502_6059835696601624287_n.jpg";
import ImageFive from "../../assets/svg/images.jpg";

const HomePageFour = () => {
  const Holder = [
    {
      Image: `${ImageOne}`,
      name: "Boston Celtics",
      post: "Massachusetts",
      special: "18-Times World Champions",
    },
    {
      Image: `${ImageTwo}`,
      
      post: "2024 Boston Celtics championship parade",
      special: "Boston celebrates champion Celtics with duck boat parade",
    },
    {
      Image: `${ImageThree}`,
      name: "Bill Russel",
      post: "Boston Celtics",
      special:
        "A toast to the greatest player in the history of the NBA{11 Championships😮}",
    },
    {
      Image: `${ImageFour}`,
      name: "The Boston Globe",
      
      special: "The great expectations of Jayson Tatum and Jaylen Brown The great expectations of Jayson Tatum and Jaylen Brown ...",
    },
    {
      Image: `${ImageFive}`,
      name: "Jason Tatum post game interview",
  
      special: "What they gon say now Tatum",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <nav>
          Your <span style={{ color: " #1ba5e5" }}>2024</span> World Champion
        </nav>

        <CardHold>
          {Holder.map((data, i) => (
            <Card key={i}>
              <div>
                <img src={data.Image} alt="" />
              </div>
              <h3>{data.name}</h3>
              <h3>{data.post}</h3>
              <p>{data.special}</p>
            </Card>
          ))}
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default HomePageFour;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  flex-direction: column;
  nav {
    font-weight: 400;
    font-size: 50px;
    font-family: Prata;
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

  img {
    width: 90%;
    height: 200px;

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
  margin: 5px;
  height: 300px;
  width: 250px;
  font-size: 14px;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  h3 {
    margin: 0px;
    margin-left: 3px;
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
