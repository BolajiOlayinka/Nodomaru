import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import BannerImage from "../../assets/banner-1.jpg";
import LargeBannerImage from "../../assets/banner-1a.jpg";
import WhiteLogo from "../../assets/LogoWhite.png";
import PalmTree from "../../assets/PalmTree.png";
import RealEstate from "../../assets/image-1.jpg";
import FinancialPlan from "../../assets/image-2.jpg";
import BeachImage from "../../assets/banner-2.png";
import SmallRightEstate from "../../assets/image-4.jpg";
import SmallFinance from "../../assets/image-3.jpg";
import LogoWhite from "../../assets/icon.svg";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import { HashLink as Linker } from "react-router-hash-link";
import animateScrollTo from "animated-scroll-to";

import Posts from "./HomePostList";
import Form from "./ContactForm";

export default function Home() {
  useEffect(() => {
    Aos.init(
      {
        duration: 3000,
      },
      []
    );
  });
  const ScrollToSectionOne = () => {
    animateScrollTo(document.querySelector(".sectionOne"));
  };
  const ScrollToSectionTwo = () => {
    animateScrollTo(document.querySelector(".sectionTwo"));
  };
  return (
    <Wrapper>
      <Banner>
        <Container>
          <LogoContainer>
            <img src={WhiteLogo} alt="Nodomaru Logo" />
            <LogoSubText>事業を通じてのどまる社会を創る</LogoSubText>
            <LogoButton href="/service" id="#trigger-up">
              詳しく
            </LogoButton>
          </LogoContainer>
          <PalmContainer  data-aos-anchor="#trigger-up"
     data-aos-anchor-placement="top-top" data-aos="fade-up">
            <img src={PalmTree} alt="Nodomaru PalmTree" />
          </PalmContainer>
        </Container>
      </Banner>
      <Service>
        <ServiceContainer>
          <NodomaruHeading>Nodomaruとは</NodomaruHeading>
          <HeadingUnderline data-aos="fade-right"></HeadingUnderline>
          <ServiceHeading>私たちのサービス</ServiceHeading>
          <ServiceBody>
            「のどまる」とは古語で「のどかになる」という意味です。現代では様々な生き方が提示されており、多様性の時代を迎えています。
            そのような社会の中で、弊社は現代の「のどまる」を「
            精神的な幸福と経済的な両立」と定義します。弊社は一人でも多
            くのお客様の「のどまる人生」の実現に貢献致します。
          </ServiceBody>
        </ServiceContainer>
      </Service>

      <Container>
        <ServiceTypes>
          <RealEstateWrapper to="/service/#sectionOne" onClick={ScrollToSectionOne}>
            <RealEstateDivider>
              <LeftDivider>
                <img src={LogoWhite} alt="Nodomaru Logo" />
              </LeftDivider>
              <RightDivider>
                Real Estate <br />
                不動産
              </RightDivider>
            </RealEstateDivider>
          </RealEstateWrapper>
          <FinancialPlanWrapper to="/service/#sectionTwo" onClick={ScrollToSectionTwo}>
            <FinancialPlanDivider>
              <LeftDivider>
                <img src={LogoWhite} alt="Nodomaru Logo" />
              </LeftDivider>
              <RightDivider>
                Financial Planning & Consulting <br/> FP コンサルティング
              </RightDivider>
            </FinancialPlanDivider>
          </FinancialPlanWrapper>
        </ServiceTypes>
        <SmallServiceTypes>
          <SmallEstateWrapper>
            <LeftEstate></LeftEstate>
            <RightEstate to="/service/#sectionOne" onClick={ScrollToSectionOne}>
              Real Estate <br />
              不動産
              <SmallLogoRight>
                <img src={LogoWhite} alt="Nodomaru Logo Icon" />
              </SmallLogoRight>
            </RightEstate>
          </SmallEstateWrapper>
          <SmallFinancialWrapper>
            <LeftFinance to="/service/#sectionTwo" onClick={ScrollToSectionTwo}>
              Financial Planning & Consulting
              <h3>コンサルティング</h3>
              <SmallLogoLeft>
                <img src={LogoWhite} alt="Nodomaru Logo Icon" />
              </SmallLogoLeft>
            </LeftFinance>
            <RightFinance></RightFinance>
          </SmallFinancialWrapper>
        </SmallServiceTypes>
      </Container>
      <HomeNews>
        <Container>
          <BetterServiceHeading>
            BUILDING BUSINESS FOR A BETTER SOCIETY
          </BetterServiceHeading>
          <BetterServiceSubText>
            私はほか今にその安心人という事のために弱らますた。
          </BetterServiceSubText>
          <Divider />
          <NewsHeading>Company News</NewsHeading>
          <SmallNewsHeading>ニュース</SmallNewsHeading>
          <Posts />
          <ReadMoreButton to="/news" className="contactform" id="contactform">
            Read More Posts
          </ReadMoreButton>
        </Container>
        <ContactUsSection>
          <ContactHeading>お問い合わせ</ContactHeading>
          <ContactTel>Tel : 03-6456-4538</ContactTel>
          <ContactInfo>問い合わせメールアドレス：info@ndmr.co.jp</ContactInfo>
          <Form />
        </ContactUsSection>
      </HomeNews>
    </Wrapper>
  );
}
const Wrapper = styled.div``;

const Container = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;

const Banner = styled.div`
  background: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 592px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 11px solid white;
  @media (min-width: 1600px) {
    background: url(${LargeBannerImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 592px;
  }
  @media (max-width: 576px) {
    background: url(${BannerImage});
    border-right: 0px;
    border-left: 0px;
    border-top: 0px;
  }
`;
const LogoContainer = styled.div`
  width: 90%;
  margin: auto;
  img {
    width: 700px;
  }
  @media (max-width: 768px) {
    img {
      width: 90%;
    }
  }
`;
const LogoSubText = styled.div`
  width: 583px;
  height: 69px;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  margin: auto;
  color: white;
  margin-bottom: 39px;
  @media (max-width: 768px) {
    width: 400px;
    font-size: 24px;
  }
  @media (max-width: 576px) {
    width: 220px;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 177px;
  }
`;
const LogoButton = styled.a`
  width: 104px;
  height: 30px;
  padding: 9px 25px 9px 25px;
  background-color: var(--mainYellow);
  color: white;
  text-decoration: none;
  position: relative;
  z-index: 1;
`;
const PalmContainer = styled.div`
  position: absolute;
  text-align: right;
  top: 0;
  margin-top: 296px;
  width: 95%;
  padding-right: 126px;
  img {
    height: 728px;
    width: 320px;
    
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (min-width: 991px) and (max-width: 1199px) {
    padding-right:0px;
    img {
      margin-right: 36px;
    }
  }
  @media (max-width: 990.9px) {
    padding-right:0px;
    img {
      margin-right: 0px;
    }
  }
  @media (max-width: 768px) {
    padding-right:0px;
    img {
      width: 260px;
      height: 598px;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-top: 385px;
    padding-right:0px;
    img {
      width: 226px;
      height: 444px;
      margin-right: 0px;
    }
  }
`;
const ServiceContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 39px 32px;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const Service = styled.div`
  background-color: var(--lightBlue);
  border-top-width: 0px !important;
  border: 11px solid white;
  

  @media (max-width: 768px) {
    border-right: 0px solid white;
    border-left: 0px solid white;
  }
`;
const ServiceHeading = styled.div`
  width: 465px;
  height: 54px;
  font-size: 48px;
  line-height: 56px;
  font-weight: bold;
  color: white;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 576px) {
    width: 192px;
    height: 20px;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 12px;
  }
`;
const NodomaruHeading = styled.div`
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  font-weight: 400;
  height: 54px;
  @media (max-width: 576px) {
    width: 260px;
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 426px) {
    width: 150px;
    ${"" /* padding-bottom:16px; */}
  }
`;
const HeadingUnderline = styled.div`
  width: 120px;
  height: 16px;
  background-color: var(--mainYellow);
  margin-top: 31px;
  margin-bottom: 31px;
  @media (max-width: 426px) {
    margin-bottom: 10px;
    ${"" /* margin-top:16px; */}
  }
`;
const ServiceBody = styled.div`
  width: 486px;
  font-size: 18px;
  line-height: 21px;
  color: white;
  margin-top: 5px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    width: 360px;
  }
  @media (max-width: 576px) {
    width: 262px;
    height: 103px;
    font-size: 12px;
  }
`;

const ServiceTypes = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width:1200px){
width:1200px;
margin:auto;
justify-content:space-around;
}
`
;

const SmallServiceTypes = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;
const RealEstateWrapper = styled(Linker)`
  background: url(${RealEstate});
  height: 430px;
  width: 50%;
  background-size: cover;
  border: 10px solid white;
  border-top-width: 0px !important;
  border-right-width: 0px !important;
  padding-top: 312px;
  @media(min-width:1200px){
    border: 0px !important;
    border-bottom-width: 11px solid white;
    width:582px;
  }
  @media (max-width: 991px) {
    display: none;
  }
  :hover{
    text-decoration:none;
  }
`;
const LeftEstate = styled.div`
  width: 52%;
  height: 260px;
  background: url(${SmallRightEstate});
  background-size: cover;
  border-left: 11px solid white;
  @media (max-width: 768px) {
    height: 220px;
    border-right: 0px solid white;
    border-left: 0px solid white;
  }
  @media (max-width: 576px) {
    height: 160px;
  }
`;
const RightEstate = styled(Linker)`
  width: 48%;
  background-color: var(--mainYellow);
  height: 260px;
  padding: 20px;
  font-size: 32px;
  line-height: 38px;
  font-weight: bold;
  border-right: 11px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color:black;
  @media (max-width: 768px) {
    height: 220px;
    font-size: 24px;
    border-right: 0px solid white;
    border-left: 0px solid white;
  }
  @media (max-width: 576px) {
    height: 160px;
    font-size: 20px;
    line-height: 23px;
  }
  @media (max-width: 374.9px) {
    font-size: 16px;
    line-height: 19px;
  }
  :hover{
    text-decoration:none;
    color:black;
  }
`;
const SmallLogoRight = styled.div`
  text-align: right;
  position: relative;
  img {
    width: 35px;
    height: 35px;
  }
`;
const SmallLogoLeft = styled.div`
  text-align: left;
  position: relative;
  img {
    width: 35px;
    height: 35px;
  }
`;
const SmallEstateWrapper = styled.div`
  display: flex;
`;
const SmallFinancialWrapper = styled.div`
  display: flex;
`;
const RightFinance = styled.div`
  width: 48%;
  height: 260px;
  background: url(${SmallFinance});
  background-size: cover;
  border-right: 11px solid white;
  border-top: 11px solid white;
  color:white;
  @media (max-width: 768px) {
    height: 220px;
    border-top: 11px solid white;
    border-right: 0px solid white;
    border-left: 0px solid white;
  }
  @media (max-width: 576px) {
    height: 160px;
  }
`;
const LeftFinance = styled(Linker)`
  width: 52%;
  ${"" /* height:260px; */}
  background-color: var(--mainYellow);
  padding: 20px;
  
  font-size: 32px;
  line-height: 38px;
  font-weight: bold;
  border-left: 11px solid white;
  border-top: 11px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color:black;
  @media (max-width: 768px) {
    height: 220px;
    font-size: 24px;
    line-height: 28px;
    border-top: 11px solid white;
    border-right: 0px solid white;
    border-left: 0px solid white;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 23px;
    height: 160px;
    padding-right: 0px;
    font-weight:700;
    
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
      line-height: 21px;
      width:169px;
      font-weight:700;
      
    }
  }
  @media (max-width: 374.9px) {
    font-size: 16px;
    font-weight:700;
  }
  :hover{
    text-decoration:none;
  }
`;

const RealEstateDivider = styled.div`
  background-color: var(--mainYellow);
  display: flex;
  align-items: center;
  height: 78px;
  width: 385px;
  padding: 18px 15px 18px 15px;
  color:black;

  
`;
const LeftDivider = styled.div`
  padding-right: 16px;
  ${'' /* padding-left: 15px; */}
  img {
    width: 35px;
  }
`;
const RightDivider = styled.div`
 
  font-size: 20px;
  line-height: 23px;
  font-weight: bold;
  :hover{
    text-decoration:none;
  }
`;

const FinancialPlanWrapper = styled(Linker)`
  background: url(${FinancialPlan});
  background-size: cover;
  height: 430px;
  width: 50%;
  border: 11px solid white;
  border-top-width: 0px !important;
  padding-top: 312px;
  @media(min-width:1200px){
    border: 0px !important;
    border-bottom-width: 11px solid white;
    width:582px;
  }
  @media (max-width: 991px) {
    display: none;
  }
  :hover{
    text-decoration:none;
  }
`;

const FinancialPlanDivider = styled.div`
  background-color: var(--mainYellow);
  display: flex;
  height: 78px;
  width: 385px;
  padding: 18px 15px 18px 15px;
  color:black;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
  :hover{
    text-decoration:none;
  }
`;
const BetterServiceHeading = styled.div`
  width: 761px;
  margin: auto;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  font-weight: 300;
  padding-top: 50px;
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
  @media (max-width: 576px) {
    padding-top: 35px;
    width: 90%;
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 425px) {
    padding-top: 17px;
  }
`;
const BetterServiceSubText = styled.div`
  width: 620px;
  margin: auto;
  font-size: 24px;
  line-height: 33px;
  font-weight: 400;
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
  @media (max-width: 576px) {
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    padding-top: 5px;
  }
  @media (max-width: 576px) {
    width: 100%;
    font-size: 14px;
    line-height: 19px;
  }
`;
const HomeNews = styled.div`
  background: url(${BeachImage});
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
`;
const NewsHeading = styled.div`
  width: 222px;
  height: 50px;
  font-size: 24px;
  line-height: 28px;
  foint-weight: 400;
  margin: auto;
  text-align: center;
  @media (max-width: 576.1px) {
    display: none;
  }
`;
const SmallNewsHeading = styled.div`
  width: 222px;
  height: 50px;
  font-size: 36px;
  line-height: 42px;
  font-weight: bold;
  margin: auto;
  text-align: center;
  @media (min-width: 576px) {
    display: none;
  }
`;

const ReadMoreButton = styled(Link)`
  width: 500px;
  height: 60px;
  color: var(--lightBlue);
  display: flex;
  align-items: center;
  text-align: center;
  background-color: white;
  margin-top: 12px;
  margin: auto;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 576px) {
    width: 151px;
    height: 40px;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    margin: auto;
  }
`;
const ContactUsSection = styled.div``;
const ContactHeading = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  margin-top: 47px;
`;
const ContactTel = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-top: 22px;
`;
const ContactInfo = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  padding-bottom: 22px;
`;
