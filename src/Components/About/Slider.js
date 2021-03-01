import React from "react";
import styled from "styled-components";
import BannerThree from "../../assets/AKINA.jpg";
import SHINGO from "../../assets/SHINGO.jpg";
import SHUZO from "../../assets/SHUZO.jpg";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

export default function Client() {
  const messages = {
    workplace: `
      オフィスは、日当たりが良く、緑が溢れ、社員の健康意識も高いので、心も身体も健康になれる環境です。
      社員同士は仲が良く、常に笑顔が絶えません。
      社長との距離も近く、新規事業の相談が出来たり、一人一人の意見を尊重してくれる社風もあります。
    `,
    culture: `
      『のどまる＝のどかになる』をお客様に提供するためには、メンバーがのどまる状態であることが重要です。
      日々密にコミュニケーションを取るだけではなく、週に2回の社内外勉強会で、多角的な視点を持って仕事に取り組める仕組みを作っています。
      そして、社員同士が互いを知り、相手の良いところを伸ばす文化が根付いています。
    `,
    team: `
      不動産やFPの知識は、私生活でも活用できており、自分の成長を感じられる場面が多いです。
      それに加え、会社を作るスタートアップの一員として、自分と会社の成長を楽しめるのものどまるの最大の特徴です。
      個々のポテンシャルを信じて仕事を任せてもらえるので、重要なポジションを担えるチャンスもあります。
    `,
  };
  return (
    <Wrapper>
    <LargeCarousel>
      <OwlCarousel
        items="1"
        dots
        autoplay
        loop
        className="d-lg-block d-lg-block d-lg-block d-lg-block"
      >
        <div className="item">
        <Container style={{backgroundImage:`url(${BannerThree})`, backgroundSize:"contain"}}>
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
          <SliderText>{messages.workplace}</SliderText>
          <QuoteName>AKINA</QuoteName>
          </ContentWrapper>
            </RightContainer>

        </Container>
        
        </div>
        <div className="item">
       
        <Container style={{backgroundImage:`url(${SHINGO})`, backgroundSize:"contain"}}>
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
          <SliderText>{messages.team}</SliderText>
          <QuoteName>SHINGO</QuoteName>
          </ContentWrapper>
            </RightContainer>
            
        </Container>

             
        </div>
        <div className="item">
        <Container style={{backgroundImage:`url(${SHUZO})`, backgroundSize:"contain"}}>
          <RightContainer>
          <ContentWrapper>
          <ThreePreHeader>About Us</ThreePreHeader>
          <ThreeHeader>
            <span>OUR</span> CULTURE
          </ThreeHeader>
          <ThreeDivider></ThreeDivider>
          <SliderText>{messages.culture}</SliderText>
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
          <SliderText>{messages.workplace}</SliderText>
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
          <SliderText>{messages.team}</SliderText>
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
          <SliderText>{messages.culture}</SliderText>
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
  height: 400px;
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
const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media(min-width:1200px) {
    width: 1200px;
    height: 400px;
    margin: auto;
  }

  @media(max-width: 991px) {
    flex-direction: column;
    width: 100%;
  }
`
const SliderText = styled.div`
  color: black;
  font-size: 19px;
  line-height: 27px;
  text-align: justify;
  @media(max-width:576px){
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 425px) {
    font-size: 15px;
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
  ${'' /* margin-top:-15px; */}
  @media(max-width:426px){
    font-size:24px;
    line-height:28px;
    margin-top:-0px;
  }
`;
const ThreePreHeader = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: black;
  font-weight: bold;
  padding-bottom: 0px;
  width: 428px;
  @media(max-width: 576px){
    width:400px;
  }
  @media(max-width: 426px){
    font-size: 15px;
    line-height: 20px;
    width:292px;
  }

`;
const ThreeHeader = styled.div`
  font-size: 48px;
  line-height: 56px;
  color: black;
  font-weight: bold;
  padding-bottom: 10px;
  width: 428px;
  span {
    font-weight: 200;
  }
  @media(max-width:576px){
    width:400px;
  }
  @media(max-width:426px){
    font-size:25px;
    line-height: 1.2;
    width:292px;
  }
`;
const ThreeDivider = styled.div`
  width: 167px;
  height: 5px;
  background-color: white;
  margin-bottom: 10px;
 
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
const RightContainer = styled.div`
  margin-left:auto;
  width:49.3%;
  background-color:var(--mainYellow);
  padding: 27px 34px 27px 67px;
  height: 400px;
  @media(max-width:991px){
    width: 100%;
    height: 400px;
    padding-left:0px;
    padding-right:0px;
  }
  @media(max-width:426px) {
    height: 320px;
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
