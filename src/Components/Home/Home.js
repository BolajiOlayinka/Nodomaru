import React from "react";
import styled from "styled-components";
import BannerImage from "../../assets/BannerImg.png";
import WhiteLogo from "../../assets/LogoWhite.png";
import PalmTree from "../../assets/PalmTree.png";
import RealEstate from "../../assets/RealEstate.png";
import FinancialPlan from "../../assets/FinancialPlan.png";

export default function Home() {
  return (
    <React.Fragment>
      <Banner>
        <Container>
          <LogoContainer>
            <img src={WhiteLogo} alt="Nodomaru Logo" />
            <LogoSubText>事業を通じてのどまる社会を創る</LogoSubText>
            <LogoButton href="/" target="_blank" referrer="noreferrer">
              詳しく
            </LogoButton>
          </LogoContainer>
          <PalmContainer>
            <img src={PalmTree} alt="Nodomaru PalmTree" />
          </PalmContainer>
        </Container>
      </Banner>
      <Service>
        <Container>
          <NodomaruHeading>Nodomaruとは</NodomaruHeading>
          <HeadingUnderline></HeadingUnderline>
          <ServiceHeading>私たちのサービス</ServiceHeading>
          <ServiceBody>
            「のどまる」とは古語で「のどかになる」という意味です。現代では様々な生き方が提示されており、多様性の時代を迎えています。
            そのような社会の中で、弊社は現代の「のどまる」を「
            精神的な幸福と経済的な両立」と定義します。弊社は一人でも多
            くのお客様の「のどまる人生」の実現に貢献致します。
          </ServiceBody>
        </Container>
      </Service>
      <ServiceTypes>
    <RealEstateWrapper>
        
    </RealEstateWrapper>
    <FinancialPlanWrapper>
        
    </FinancialPlanWrapper>
      </ServiceTypes>
    </React.Fragment>
  );
}
const Container = styled.div`
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
`;
const LogoContainer = styled.div`
  img {
    width: 700px;
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
`;
const LogoButton = styled.a`
  width: 104px;
  height: 30px;
  padding: 9px 25px 9px 25px;
  background-color: var(--mainYellow);
  color: white;
  text-decoration: none;
`;
const PalmContainer = styled.div`
  position: absolute;
  text-align: right;
  top: 0;
  margin-top: 296px;
  img {
    height: 728px;
    width: 320px;
    margin-right:126px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
const Service = styled.div`
  background-color: var(--lightBlue);

  border-top-width: 0px !important;
  border: 11px solid white;
  padding: 39px 32px;
`;
const ServiceHeading = styled.div`
width: 465px;
height:54px;
font-size: 48px;
line-height: 56px;
font-weight:bold;
color:white;
`;
const NodomaruHeading = styled.div`
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  font-weight: 400;
  height:54px;
`;
const HeadingUnderline = styled.div`
  width: 120px;
  height: 16px;
  background-color: var(--mainYellow);
  margin-top: 31px;
  margin-bottom: 31px;
`;
const ServiceBody = styled.div`
width: 486px;
font-size: 18px;
line-height: 21px;
color:white;
margin-top:5px;
height:136px;
font-weight:400;
`;

const ServiceTypes = styled.div `
display:flex;
flex-direction:row;
width:100%;
`
const RealEstateWrapper = styled.div `
background: url(${RealEstate});
height:430px;
width:50%;
background-size:cover;
border:11px solid white;
border-top-width:0px!important;
border-right-width:0px!important;
`
const FinancialPlanWrapper = styled.div `
background: url(${FinancialPlan});
background-size:cover;
height:430px;
width:50%;
border:11px solid white;
border-top-width:0px!important;
`