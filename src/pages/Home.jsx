import BlogPageOne from "../component/Blog/BlogPageOne";
import BlogPageTwo from "../component/Blog/BlogPageTwo";
import BlogPageThree from "../component/Blog/BlogPageThree";
import BlogPageFour from "../component/Blog/BlogPageFour";
import BlogPageFive from "../component/Blog/BlogPageFive";
import BlogPageSix from "../component/Blog/BlogPageSix";
import BlogPageSeve from "../component/Blog/BlogPageSeve";
import styled from "styled-components";

const Home = () => {
  return (
   <Container>
      <BlogPageOne />
      <BlogPageTwo />
      <BlogPageThree />
      <BlogPageFour />
      <BlogPageFive />
      <BlogPageSix />
      <BlogPageSeve />
   </Container>
  );
};

export default Home;
const Container = styled.div`
  /* min-height: calc(100vh - 70vh);
  overflow-x: hidden; */
  background-color: black;
`
