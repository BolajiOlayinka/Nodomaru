import React,{useState} from "react";
import styled from "styled-components";
import BannerImage from "../../assets/AboutBanner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function About() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  return (
    <React.Fragment>
      <Banner>
        <Container>
            <AboutArea>
                <Left>

                </Left>
                <Right>
                    <AboutBody>
                    About Our Company
                    </AboutBody>
                    <AboutHead>
                    会社について
                    </AboutHead>
                    <AboutBody>
                    私はほか今にその安心人という事のために弱らますた。
                    ついに昨日に自覚国もはたしてその品評ですないまでを
                    </AboutBody>
                   
            <PlayButton onClick={toggle}>
              CEOからのメッセージ
              
            </PlayButton><FontAwesomeIcon className="ml-4" icon={faPlayCircle} />
            
                </Right>
                <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}></ModalHeader>
              <ModalBody>
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                  }}
                >
                  <iframe
                    title="youtube"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/TnR9O-d8nhY?autoplay=1&mute=1"
                    frameBorder="0"
                  />
                </div>
              </ModalBody>
            </Modal>

            </AboutArea>
        </Container>
      </Banner>
    </React.Fragment>
  );
}

const Banner = styled.div`
  background: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 796px;
`;
const Container = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const AboutArea = styled.div `
padding-top:478px;
display:flex;
align-items:center;
`
const Left = styled.div `


`
const Right = styled.div `
background-color:white;
padding:10px 20px 20px 20px;
opacity:0.75;
width: 332px;
height: 288px;
margin-left:auto;

`
const AboutHead = styled.div `
font-weight: bold;
font-size: 48px;
line-height: 56px;
margin-top:7px;
margin-bottom:7px;
`
const AboutBody =styled.div `
font-weight: normal;
font-size: 18px;
line-height: 21px;
font-weight:bold;
`
const PlayButton = styled.button`
  color: black;
 ${'' /* padding:9px 16px 9px 16px; */}
 outline:0;
 border:transparent;
  font-size: 18px;
line-height: 21px;
  border-radius:5px;
  width: 228px;
height: 39px;
border-radius: 4px;
background-color:var(--mainYellow);
  :active {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
  :focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
  @media (min-width: 1200px) {
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 55px;
    padding: 8px 28px;
  }
  @media (min-width: 991px) and (max-width: 1199.9px) {
    margin-bottom: 25px;
    padding: 10px 24px;
  }
  @media (min-width: 576px) and (max-width: 990.9px) {
    margin-bottom: 25px;
    padding: 10px 24px;
  }
  @media (max-width: 576.1px) {
    display: none;
  }
`;