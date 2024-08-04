import BlogPageOne from "../component/Blog/BlogPageOne";
import BlogPageTwo from "../component/Blog/BlogPageTwo";
import BlogPageThree from "../component/Blog/BlogPageThree";
import BlogPageFour from "../component/Blog/BlogPageFour";
import BlogPageFive from "../component/Blog/BlogPageFive";
import BlogPageSix from "../component/Blog/BlogPageSix";
import BlogPageSeve from "../component/Blog/BlogPageSeve";

const Home = () => {
  return (
    <div>
      <BlogPageOne />
      <BlogPageTwo />
      <BlogPageThree />
      <BlogPageFour />
      <BlogPageFive />
      <BlogPageSix />
      <BlogPageSeve />
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
