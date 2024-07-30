import HomePageOne from "../component/Home/HomePageOne";
// import styled from "styled-components";
// import Background from "../assets/png/home-background.png";
import HomePageTwo from "../component/Home/HomePageTwo";
import HomePageThree from "../component/Home/HomePageThree";
import HomePageFour from "../component/Home/HomePageFour";
import HomePageFive from "../component/Home/HomePageFive";

const Home = () => {
  return (
    <div>
      <HomePageOne />
      <HomePageTwo />
      <HomePageThree />
      <HomePageFour />
      <HomePageFive />
    </div>
  );
};

export default Home;
// const Container = styled.div`
//   min-height: calc(100vh - 70px);
//   background-color: red;
//   background-image: url(${Background});
//   background-position: center;
//   overflow-x: hidden;
//   background-repeat: no-repeat;
//   margin-top: 70px;
// `;
// const Wrapper = styled.div``;
