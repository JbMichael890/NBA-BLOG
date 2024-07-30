import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "../../assets/png/pexels-dariabuntaria-2422438.jpg";
import ImageTwo from "../../assets/png/pexels-shvets-production-8415906.jpg";
import ImageThree from "../../assets/png/pexels-alfinauzikri-2968077.jpg";
import ImageFour from "../../assets/png/pexels-andrew-mcmurtrie-2303639-4002013.jpg";

const HomePageOne = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Contain className="slider-container">
      <Slider {...settings}>
        <Slide>
          <img src={ImageOne} alt="" />
        </Slide>

        <Slide>
          <img src={ImageTwo} alt="" />
        </Slide>
        <Slide>
          <img src={ImageThree} alt="" />
        </Slide>
        <Slide>
          <img src={ImageFour} alt="" />
        </Slide>
      </Slider>
    </Contain>
  );
};

export default HomePageOne;

const Contain = styled.div`
  max-width: 87%;
  margin-right: auto;
  margin-left: auto;
`;

const Slide = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
    @media (max-width: 965px) {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
