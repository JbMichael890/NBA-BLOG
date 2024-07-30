import styled from "styled-components";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { BiLogoSnapchat } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <TextHold>
          <HoldOne>
            <h3>NBA ORGANIZATION</h3>
            <p>NBA ID</p>
            <p>NBA Official</p>
            <p>NBA Carrers</p>
            <p>NBA Fan Code of Conduct</p>
            <p>Game Day</p>
            <p>Tickets</p>
            <p>NBA Arcade</p>
          </HoldOne>
          <HoldTwo>
            <h3>BROADCAST</h3>
            <p>Where to Watch/Listen</p>
            <p>Lockervision</p>
            <p>SpectrumSportsNet+</p>
            <p>NBA Communication</p>
            <p>NBA League Pass</p>
            <p>Braodcasters</p>
          </HoldTwo>
          <HoldThree>
            <h3>MEDIAPARTNERS</h3>
            <p>Spectrum SportsNet</p>
            <p>ESPN NBA 710</p>
            <p>NBA Radio Network</p>
            <p>TuLiga Radio</p>
          </HoldThree>

          <HoldFour>
            <h3>SOCIALMEDIA</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Snapchat</p>
            <p>TikTok</p>
            <p>Twitter</p>
            <p>YouTube</p>
            <p>NBA E-mail News</p>
            <p>Weibo</p>
          </HoldFour>
        </TextHold>
        <IconHold>
          <h3>CONNECT</h3>
          <nav>
            <BiLogoFacebookCircle />
          </nav>
          <nav>
            <RiTwitterXFill />
          </nav>
          <nav>
            <FaInstagram />
          </nav>
          <nav>
            <FaYoutube />
          </nav>
          <nav>
            <PiTiktokLogo />
          </nav>
          <nav>
            <BiLogoSnapchat />
          </nav>
          <nav>
            <MdOutlineEmail />
          </nav>
        </IconHold>
      </Wrapper>
      <hr />
      <DownHold>
        <h4>Copyright © 2024 NBA Media Ventures, LLC, All rights reserved.</h4>
        <p>
          Privacy Policy | Terms of Use | Customer Support | Accessibility and
          Closed Captions | Your Privacy Choices
        </p>
        <p>
          Cookie Policy | EEA/UK Privacy Statement | Brazil Privacy Statement |
          California Consumer Privacy Statement | Colorado Consumer Privacy
          Statement
        </p>
        <p>
          if you are having difficulty accessing any content on this website,
          please visit our Accessibility page
        </p>
        <p>
          NBA.com is part of Warner Media,LLC's Turner Sports & Entertainment
          Digital Network
        </p>
        <nav>
          Warner<span>Media</span>
        </nav>
      </DownHold>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  background-color: #212434;

  hr {
    border: 1px solid black;
    width: 98%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  color: whitesmoke;
  flex-wrap: wrap;

  p {
    font-weight: 490;
    margin: 8px;
  }

  h3 {
    font-weight: 900;
    margin-bottom: 40px;
  }
  @media (max-width: 1013px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    text-align: center;
  }
`;
const DownHold = styled.div`
  width: 98%;
  color: whitesmoke;
  flex-wrap: wrap;

  h4 {
    font-weight: 800;
  }
  h4 {
    font-weight: 800;
  }
  nav {
    font-weight: 800;
    font-size: large;
  }
  span {
    font-weight: 0;
    font-family: ho;
  }
  p {
    font-size: smaller;
    font-weight: 500;
  }
  @media (max-width: 1013px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

const HoldOne = styled.div`
  margin-right: 40px;
`;
const HoldTwo = styled.div`
  margin-right: 30px;
`;
const HoldThree = styled.div`
  margin-right: 30px;
`;
const HoldFour = styled.div``;
const IconHold = styled.div`
  text-align: center;

  align-items: center;

  nav {
    font-size: 25px;
  }
`;

const TextHold = styled.div`
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
`;
