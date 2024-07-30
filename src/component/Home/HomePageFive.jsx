import styled from "styled-components";
import immgOne from "../../assets/jpg/452139270_1064182515071731_692583235727735865_n.jpg";
import imageTwo from "../../assets/jpg/452109741_1064182448405071_4218513155106218748_n.jpg";
import imageThree from "../../assets/jpg/452121381_1064182488405067_8605314170065482964_n.jpg";
import imageFour from "../../assets/jpg/449062031_1048639309959385_3582296539170557669_n.jpg";
import imageFive from "../../assets/jpg/449051378_1048639129959403_3131742254562441762_n.jpg";
import imageSix from "../../assets/jpg/449056551_1048639073292742_5141100649370078569_n.jpg";

const HomePageFive = () => {
  const patient = [
    {
      image: `${immgOne}`,

      name: "Milwaukee Bucks🏆",
    },
    {
      image: `${imageTwo}`,

      name: "GIANNIS & THE BUCKS! 🏆.",
    },
    {
      image: `${imageThree}`,

      name: "NBA MVP award",
    },
    {
      image: `${imageFour}`,

      name: "Second Championship win ",
    },
    {
      image: `${imageFive}`,

      name: "Kia NBA Most Valuable Player",
    },
    {
      image: `${imageSix}`,

      name: "Emotional MVP acceptance",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <main>
        Milwaukee Bucks '50-year wait ends with NBA championship win | PBS News
        </main>
        <Holder>
          {patient.map((data, index) => (
            <Card key={index}>
              <Hold>
                <img src={data.image} alt="" />
              </Hold>
              <nav>
                {" "}
                <h3>{data.name}</h3>
              </nav>
            </Card>
          ))}
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default HomePageFive;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 85%;
  main{
    
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    font-family: Prata;
    color: rgb(25, 48, 92);
    @media (max-width:600px) {
      font-size: 30px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 15px;
  }
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  margin-top: 20px;
  p {
    font-weight: 500;
  }
  h3 {
    margin: 0px;
  }

  
`;
const Hold = styled.div`
  margin: 0px 10px;

  background-color: #ddd;
  height: 200px;
  width: 250px;
  img {
    height: 100%;
    width: 100%;
    margin-right: 10px;
    cursor: pointer;
  }
  
  @media (max-width: 500px) {
    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
  
  @media (max-width: 768px) {
    text-align: center;
    margin: 10px;
    width: 100%;
  }
`;
const Card = styled.div`
&:hover{
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: all 500ms;
}`