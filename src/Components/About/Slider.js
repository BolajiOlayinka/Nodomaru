import React from "react";
import styled from "styled-components";
import BannerThree from "../../assets/Banner_3.png";
import SHINGO from "../../assets/SHINGO.png";
import SHUZO from "../../assets/SHUZO.png";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

export default function Client() {
  return (
    <Wrapper>
    <LargeCarousel>
      <OwlCarousel
        items="1"
        loop
        autoplay
        dots
        className="d-lg-block d-lg-block d-lg-block d-lg-block"
      >
        <div className="item">
        <Container style={{backgroundImage:`url(${BannerThree})`}}>
            {/* <LeftContainer>
            <img src={BannerThree} alt="Akina Nodomaru"/>
            </LeftContainer> */}
            <RightContainer>
            <ContentWrapper>
            <ThreePreHeader>About Us</ThreePreHeader>
            <ThreeHeader>
              <span>OUR</span> WORKPLACE
            </ThreeHeader>
            <ThreeDivider></ThreeDivider>
          <SliderText>
            オフィスは広尾駅から徒歩5分の場所にあり、日当たりがよく、緑あふれる居心地のいい空間です。現在みんなで作っている会社であり、社長に対して新規事業の提案や相談ができるチャンスもあります。。
          </SliderText>
          <QuoteName>AKINA</QuoteName>
          </ContentWrapper>
            </RightContainer>

        </Container>
        
        </div>
        <div className="item">
       
        <Container style={{backgroundImage:`url(${SHINGO})`}}>
            {/* <LeftContainer>
            <img src={SHINGO} alt="Shingo Nodomaru"/>
            </LeftContainer> */}
            <RightContainer>
            <ContentWrapper>
            <ThreePreHeader>About Us</ThreePreHeader>
            <ThreeHeader>
            <span>OUR</span> TEAM
            </ThreeHeader>
            <ThreeDivider></ThreeDivider>
          <SliderText>
          みんなが和気あいあいと仲良く働いおり、社長が一番冗談を言っている気がします。不動産やFPの知識は私生活でも活用できており、自分の成長を感じられる場面が多く公私ともに楽しく過ごしています。
          </SliderText>
          <QuoteName>SHINGO</QuoteName>
          </ContentWrapper>
            </RightContainer>
            
        </Container>

             
        </div>
        <div className="item">
        <Container style={{backgroundImage:`url(${SHUZO})`}}>
            <RightContainer>
            <ContentWrapper>
            <ThreePreHeader>About Us</ThreePreHeader>
            <ThreeHeader>
              <span>OUR</span> CULTURE
            </ThreeHeader>
            <ThreeDivider></ThreeDivider>
          <SliderText>
          のどまる = のどかになる、をお客様に提供するには、チームメンバーがのどまる状態であることが不可欠です。なぜかみんなMacユーザーですが、Windows派も大歓迎！職場見学も受付中！
          </SliderText>
          <QuoteName>SHUZO</QuoteName>
          </ContentWrapper>
            </RightContainer>
            
        </Container>
        
        
        </div>
      </OwlCarousel>
      </LargeCarousel>
      <SmallCarousel>
      <OwlCarousel
        items="1"
        loop
        autoplay
        dots
        className="d-lg-block d-lg-block d-lg-block d-lg-block"
      >
        <div className="item">
        <Container>
            <LeftContainer>
            <img src={BannerThree} alt="Akina Nodomaru"/>
            </LeftContainer>
            <RightContainer>
            <ContentWrapper>
            <ThreePreHeader>About Us</ThreePreHeader>
            <ThreeHeader>
              <span>OUR</span> WORKPLACE
            </ThreeHeader>
            <ThreeDivider></ThreeDivider>
          <SliderText>
            オフィスは広尾駅から徒歩5分の場所にあり、日当たりがよく、緑あふれる居心地のいい空間です。現在みんなで作っている会社であり、社長に対して新規事業の提案や相談ができるチャンスもあります。。
          </SliderText>
          <QuoteName>AKINA</QuoteName>
          </ContentWrapper>
            </RightContainer>

        </Container>
        
        </div>
        <div className="item">
       
        <Container>
            <LeftContainer>
            <img src={SHINGO} alt="Shingo Nodomaru"/>
            </LeftContainer>
            <RightContainer>
            <ContentWrapper>
            <ThreePreHeader>About Us</ThreePreHeader>
            <ThreeHeader>
            <span>OUR</span> TEAM
            </ThreeHeader>
            <ThreeDivider></ThreeDivider>
          <SliderText>
          みんなが和気あいあいと仲良く働いおり、社長が一番冗談を言っている気がします。不動産やFPの知識は私生活でも活用できており、自分の成長を感じられる場面が多く公私ともに楽しく過ごしています。
          </SliderText>
          <QuoteName>SHINGO</QuoteName>
          </ContentWrapper>
            </RightContainer>
            
        </Container>

             
        </div>
        <div className="item">
        <Container>
        <LeftContainer>
            <img src={SHUZO} alt="Akina Nodomaru"/>
            </LeftContainer>
            <RightContainer>
            <ContentWrapper>
            <ThreePreHeader>About Us</ThreePreHeader>
            <ThreeHeader>
              <span>OUR</span> CULTURE
            </ThreeHeader>
            <ThreeDivider></ThreeDivider>
          <SliderText>
          のどまる = のどかになる、をお客様に提供するには、チームメンバーがのどまる状態であることが不可欠です。なぜかみんなMacユーザーですが、Windows派も大歓迎！職場見学も受付中！
          </SliderText>
          <QuoteName>SHUZO</QuoteName>
          </ContentWrapper>
            </RightContainer>
            
        </Container>
        
        
        </div>
      </OwlCarousel>
      </SmallCarousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
height:400px;
  button {
    border: 1px solid black !important;
    height: 12px;
    width: 12px; 
    border-radius: 50%;
    background-color: transparent !important;
    margin-right: 9px;
    margin-top:-15px;
  }
  
`;
const Container = styled.div `
display:flex;
flex-direction:row;
@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
@media(max-width:991px){
    flex-direction:column;
    width:100%;
}
`
const SliderText = styled.div`
  color: black;
  font-size: 24px;
  line-height: 28px;
  text-align: justify;
  height:176px;
  @media(max-width:576px){
      font-size:20px;
      line-height:27px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
    line-height:19px;
  }
`;
const QuoteName = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: right;
  color: black;
  text-align: right;
  margin-top:-15px;
  @media(max-width:426px){
      font-size:24px;
      line-height:28px;
      margin-top:-70px;
  }
`;
const ThreePreHeader = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: black;
  font-weight: bold;
  padding-bottom: 18px;
  width: 428px;
  ${'' /* @media(max-width:991px){
    margin:auto;
  } */}
`;
const ThreeHeader = styled.div`
  font-size: 48px;
  line-height: 56px;
  color: black;
  font-weight: bold;
  padding-bottom: 18px;
  width: 428px;
  span {
    font-weight: 200;
  }
  @media(max-width:576px){
      width:400px;
  }
  @media(max-width:426px){
      font-size:36px;
      line-height:42px;
    width:292px;
    font-weight:normal;
    
  }
`;
const ThreeDivider = styled.div`
  width: 167px;
  height: 5px;
  background-color: white;
  margin-bottom: 18px;
 
`;
const LeftContainer = styled.div `
width:51.7%;
height:400px;
img{
    overflow:hidden;
    width:100%;
}
@media(max-width:991px){
    height:100%;
    width:100%;
    
}
`
const RightContainer = styled.div `
margin-left:auto;
width:49.3%;
background-color:var(--mainYellow);
padding: 27px 34px 27px 67px;
@media(max-width:991px){
    width:100%;
    height:400px;
    padding-left:0px;
    padding-right:0px;
}
@media(max-width:426px){
    height:308px;
    ${'' /* padding:26px 54px 26px 54px; */}
}
`
const ContentWrapper =styled.div `
width:100%;
@media(max-width:991px){
  width:428px;
  margin:auto;
}
@media(max-width:576px){
    width:400px;
    margin:auto;
}
@media(max-width:426px){
    width:292px;
    margin:auto;
}
`
const SmallCarousel = styled.div `
@media(min-width:990.9px){
    display:none;
}
`
const LargeCarousel = styled.div `
@media(max-width:991px){
    display:none;
}
`