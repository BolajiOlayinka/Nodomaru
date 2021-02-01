import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import BannerImage from "../../assets/banner-3.jpg";
import SmallBanner from "../../assets/banner-3a.jpg";
import LargeBanner from "../../assets/banner-3b.jpg";
// import AdoptBanner from "../../assets/banner-4.jpg";
import GeneralBanner from "../../assets/banner-5.png";
import YelloLogo from "../../assets/yellow-logo.svg";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function About() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    Aos.init(
      {
        duration: 1200,
      },
      []
    );
  });
  return (
    <React.Fragment>
      <Banner>
        <Container>
          <AboutArea>
            <Left>
              <img src={YelloLogo} alt="Nodomaru Yellow logo" />
              <LeftText>事業を通じてのどまる社会を創る</LeftText>
              <SectionConnector data-aos="slide-up"></SectionConnector>
            </Left>
            <Right>
              <AboutBody>About Our Company</AboutBody>
              <AboutHead>会社について</AboutHead>
              <AboutBody>
                社名の「のどまる」とは古語で「のどかになる」という意味です。一人でも多くのお客様の「のどまる人生」の実現に貢献致します。
              </AboutBody>
              <PlaySection>
                <PlayButton onClick={toggle}>CEOからのメッセージ</PlayButton>
                <StyledPlayIcon icon={faPlayCircle} onClick={toggle} />
              </PlaySection>
            </Right>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle} ></ModalHeader>
              <ModalBody>
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
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
                    src="https://www.youtube.com/embed/HuwiV5yt_AY?autoplay=1&mute=1autoplay=1&mute=1"
                    frameBorder="0"
                  />
                </div>
              </ModalBody>
            </Modal>
          </AboutArea>
        </Container>
      </Banner>
      <SmallAboutDesc>
        <DescWrapper>
          <SmallHeading>Our Company</SmallHeading>
          <SmallDivider></SmallDivider>
          <AboutHead>会社について</AboutHead>
          <AboutBody>
            社名の「のどまる」とは古語で「のどかになる」という意味です。一人でも多くのお客様の「のどまる人生」の実現に貢献致します。
          </AboutBody>
          <PlaySection>
            <PlayButton onClick={toggle}>CEOからのメッセージ</PlayButton>
          </PlaySection>

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
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
                  src="https://www.youtube.com/embed/HuwiV5yt_AY?autoplay=1&mute=1"
                  frameBorder="0"
                />
              </div>
            </ModalBody>
          </Modal>
        </DescWrapper>
      </SmallAboutDesc>
      <GenBackground>
        <AdoptSection>
        <iframe frameborder="0" title="youtube" height="100%" width="100%"
    src="https://www.youtube.com/embed/Lwcv6jRZu-U?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=Lwcv6jRZu-U&iv_load_policy=3&modestbranding=1" allowfullscreen="" 
    style={{position:"absolute",top:"0", left:"0"}}>
  </iframe>
          <AdoptButton to="/#contactform">現在採用中</AdoptButton>
        </AdoptSection>
        <SectionThree>
          <Slider />
        </SectionThree>
        <SmallCompanyInfo>
          <AddressHeader>Company Information</AddressHeader>
          <div>名称 - 株式会社Nodomaru (英語表記 Nodomaru Co.,Ltd)</div>
          <div>設立 - 2019年1月18日</div>
          <div>代表者 - 向仲 駿</div>
          <div>所在地 - 渋谷区広尾5-8-11 バルビゾン22ビル 7F</div>
          <div>Tel : 03-6456-4538</div>
          <div>FAX : 03-6456-4537</div>
          <Desc>
            事業内容
            <li>不動産事業</li>
            <li>FPコンサルティング業</li>
            <li>人材紹介業</li>
            <li>クラウドファンディング事業</li>
          </Desc>
        </SmallCompanyInfo>
        <MapSection>
          <MapContainer>
            {/* <Map/> */}
            {/* <img src={Map} alt="Nodomaru Map" /> */}
            <iframe
              title="googlemap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.171881740766!2d139.71961071461334!3d35.648136639394934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0d7d5345b5%3A0x40894ad4ad64e0f7!2z44OQ44Or44OT44K-44OzMjLnlarppKg!5e0!3m2!1sen!2sng!4v1612022562675!5m2!1sen!2sng"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </MapContainer>
          <AddressContainer>
            <AddressHeader>Company Information</AddressHeader>
            <div>名称 - 株式会社Nodomaru (英語表記 Nodomaru Co.,Ltd)</div>
            <div>設立 - 2019年1月18日</div>
            <div>代表者 - 向仲 駿</div>
            <div>所在地 - 渋谷区広尾5-8-11 バルビゾン22ビル 7F</div>
            <div>Tel : 03-6456-4538</div>
            <div>FAX : 03-6456-4537</div>
            <Desc>
              事業内容
              <li>不動産事業</li>
              <li>FPコンサルティング業</li>
              <li>人材紹介業</li>
              <li>クラウドファンディング事業</li>
            </Desc>
          </AddressContainer>
        </MapSection>
        <Divider></Divider>
      </GenBackground>
    </React.Fragment>
  );
}

const Banner = styled.div`
  background: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 796px;
  @media (min-width: 2000px) {
    background: url(${LargeBanner});
  }

  @media (max-width: 991px) {
    height: 618px;
  }
  @media (max-width: 576px) {
    background: url(${SmallBanner});
    background-size: cover;
    height: 796px;
  }
`;
const Container = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const AboutArea = styled.div`
  padding-top: 478px;
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    padding-top: 300px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    height: 71px;
    align-items: center;
    margin: auto;
  }
`;
const Left = styled.div`
  margin-left: 116px;
  @media (max-width: 991px) {
    margin-left: 26px;
  }
  @media (max-width: 768px) {
    margin: auto;
  }
  @media (max-width: 426px) {
    padding-top: 400px;
  }
`;
const LeftText = styled.div`
  font-size: 24px;
  line-height: 33px;
  color: white;

  @media (max-width: 426px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: normal;
  }
`;
const Right = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  padding: 10px 20px 20px 20px;
  width: 332px;
  height: 288px;
  margin-left: auto;
  margin-right: 65px;
  @media (max-width: 991px) {
    margin-right: 25px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const SmallAboutDesc = styled.div`
  background-color: var(--lightBlue);
  color: white;
  font-size: 24px;
  padding: 71px 56px;
  @media (max-width: 426px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: 768.1px) {
    display: none;
  }
`;
const DescWrapper = styled.div`
  width: 400px;
  margin: auto;
  @media (max-width: 425px) {
    width: 270px;
    margin: auto;
  }
`;
const SmallHeading = styled.div`
  font-size: 48px;
  line-height: 55px;
  font-weight: bold;
  @media (max-width: 426px) {
    font-size: 36px;
    line-height: 42px;
    width: 186px;
  }
`;
const SmallDivider = styled.div`
  height: 5px;
  width: 120px;
  background-color: var(--mainYellow);
  margin-top: 49px;
  margin-bottom: 49px;
`;
const SectionConnector = styled.div`
  background-color: var(--mainYellow);
  width: 20px;
  height: 311px;
  position: absolute;
  margin-top: 30px;
  z-index:2;
  @media (max-width: 768px) {
    display: none;
  }
`;
const AboutHead = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  height: 56px;
  margin-top: 7px;
  margin-bottom: 7px;
  @media (max-width: 426px) {
    font-size: 36px;
    line-height: 42px;
    height: 42px;
    font-weight: normal;
  }
`;
const AboutBody = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  :first-child {
    font-weight: bold;
  }
  @media (max-width: 576px) {
    width: 80%;
  }
  @media (max-width: 426px) {
    width: 262px;
  }
`;
const PlaySection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 21px;
  @media (max-width: 426px) {
    margin-top: 13px;
  }
`;

const PlayButton = styled.button`
  color: black;
  outline: 0;
  border: transparent;
  font-size: 18px;
  font-weight: normal;
  line-height: 21px;
  border-radius: 5px;
  width: 228px;
  height: 39px;

  background-color: var(--mainYellow);
  opacity: 1 !important;
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
    ${"" /* margin-right: auto; */}
  }
  @media (max-width: 1199px) {
    padding: 10px 24px;
  }
  @media (max-width: 425px) {
    border-radius: 4px;
    background-color: var(--mainYellow);
  }
`;
const StyledPlayIcon = styled(FontAwesomeIcon)`
  font-size: 37.5px;
  color: black;
  margin-left: 9px;
  cursor: pointer;
`;
const AdoptSection = styled.div`
  ${'' /* background: url(${AdoptBanner}); */}
  position: relative; 
  z-index: 1;
  position:relative;
  height: 603px;
  text-align: center;
  padding-top: 333px;
  display:flex;
  justify-content:center;
  @media(max-width:1199px){
    display:none;
  }
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
  ${
    "" /* @media (min-width: 1600px) {
    background: url(${LargeAdoptBanner});
  } */
  }
  @media(max-width:576px) {
    display: none;
  }
`;
const GenBackground = styled.div`
position:relative;
  background: url(${GeneralBanner});
  width: 100%;
  background-size: cover;
  padding-top: 11px;
  padding-bottom: 92px;
  @media (max-width: 576px) {
    padding-top: 0px;
    
  }
`;
const AdoptButton = styled(Link)`
position:absolute;
bottom:28px;
width:140px;
margin:auto;
z-index:2;
  background-color: var(--mainYellow);
  padding: 9px 25px;
  font-size: 18px;
  color: black;
  :hover {
    text-decoration: none;
  }
`;
const SectionThree = styled.div`
  margin-top: 10px !important;
  height: 400px;

  width: 100%;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
  @media (min-width: 1024px) and(max-width:1199px) {
    width: 90%;
  }
  @media (max-width: 991px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    margin-top: 0px !important;
  }
`;
const SmallCompanyInfo = styled.div`
  background-color: white;
  margin-top: 350px;
  width: 560px;
  margin-left: auto;
  margin-right: auto;
  padding: 33px 26px;
  @media (min-width: 991px) {
    display: none;
  }
  @media (max-width: 991px) {
    margin-top: 50%;
  }
  @media (max-width: 576px) {
    width: 90%;
    margin: auto;
    margin-top: 50%;
    margin-bottom: 10px;
  }
  @media (max-width: 425px) {
    width: 320px;
    margin-top: 150px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 375px) {
    margin-top: 80px;
  }
`;
const MapSection = styled.div`
  background-color: white;
  width: 1110px;
  margin: auto;
  margin-top: 98px;
  padding: 33px 26px;
  display: flex;
  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-top: 60px !important;
    width: 90%;
    margin: auto;
  }
  @media (max-width: 1023.9px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 991px) {
    width: 560px;
    margin-top: 10px;
  }
  @media (max-width: 576px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 425px) {
    width: 320px;
    margin: auto;
    padding: 10px;
  }
`;
const MapContainer = styled.div`
  width: 548px;

  img {
    width: 100%;
    ${"" /* height: 391px; */}
  }
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 991px) {
    img {
      height: 391px;
    }
  }
`;
const AddressContainer = styled.div`
  ${"" /* width: 465px; */}
  padding-left:26px;

  font-size: 18px;
  line-height: 21px;
  div {
    padding-bottom: 2px;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
const AddressHeader = styled.div`
  font-weight: bold;
  font-size: 60px;
  line-height: 70px;
  @media (max-width: 426px) {
    width: 209px;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }
`;
const Desc = styled.div`
  padding-top: 14px;
`;
const Divider = styled.div`
  background-color: var(--mainYellow);
  margin-top: 20px !important;
  height: 27px;
  width: 1111px;
  margin: auto;
  @media (max-width: 1199px) {
    margin-top: 20px !important;
    width: 90%;
    margin: auto;
  }
  @media (max-width: 1024px) {
    margin-top: 20px !important;
    width: 90%;
    margin: auto;
  }
  @media (max-width: 991px) {
    width: 560px;
    margin: auto;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
  @media (max-width: 426px) {
    height: 10px;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-top:45px!important;
    margin-bottom: 52px;
  }
`;
