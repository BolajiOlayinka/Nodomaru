import React from "react";
import styled from "styled-components";
import BannerImage from "../../assets/ServiceBanner.png";
import BannerImage2 from "../../assets/BannerConnector.png";
import WhiteLogo from "../../assets/LogoWhite.png";

export default function Service() {
  return (
    <React.Fragment>
      <Banner>
        <Container>
          <BannerContent>
            <div>
              <img src={WhiteLogo} alt="Nodomaru Logo" />
              <div>サービス案内</div>
            </div>
          </BannerContent>
        </Container>
      </Banner>
      <Container>
        <RealEstateWrapper>
          <LeftEstate>不動産</LeftEstate>
          <RightEstate>
            <RightEstateHead>
              人生にとって大切なお住まいと資産を
            </RightEstateHead>
            <RightEstateBody>
              ただ物件のご紹介、売買や仲介をするだけでしたらどの会社にも出来ます。
              弊社の想いは「精神的な幸福と経済的な自立の両立」です。生活の基盤となるお住まい、人生の基盤となる経済、その大切なふたつをお客様ひとりひとりとしっかり向き合い
              ご提供させていただく事が、皆様の「のどまる人生」に繋がると信じております。
            </RightEstateBody>
          </RightEstate>
        </RealEstateWrapper>
      </Container>
      <BannerConnector>
      <Container>
            <Connector>

            </Connector>
            </Container>
      </BannerConnector>
      <EstateServicePoint>
      <Container>
          <PreHeading>REAL ESTATE</PreHeading>
          <Heading>OUR KEY SERVICE POINTS</Heading>
          </Container>
      </EstateServicePoint>
        <ServiceUse>
        <UseCase>

        </UseCase>
        <UseCase>

        </UseCase>
        <UseCase>

        </UseCase>
        </ServiceUse>
    </React.Fragment>
  );
}
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
  height: 270px;
  display: flex;
`;
const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 36px;
  width: 658px;
  height: 129px;
  line-height: 42px;
  text-align: center;
  margin: auto;
  padding-top: 55px;
  img {
    width: 658px;
  }
`;
const RealEstateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1078px;
  margin: auto;
  padding-top: 47px;
  padding-bottom: 47px;
`;
const LeftEstate = styled.div`
  font-weight: 700;
  padding-right: 45px;
  font-size: 55px;
  line-height: 75px;
`;
const RightEstate = styled.div`
  border-left: 1px solid #3cc5d1;
  padding-left: 45px;
  width: 718px;
`;
const RightEstateHead = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  height: 59px;
`;
const RightEstateBody = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
`;
const BannerConnector =styled.div `
background: url(${BannerImage2});
background-size:cover;
height:400px;
`
const Connector =styled.div `
background-color:#3CC5D1;
position:absolute;
margin-top:173px;
width: 20px;
height: 311px;
left:117px;
`
const EstateServicePoint = styled.div `
padding-top:64px;
text-align:center;
margin:auto;
`
const PreHeading = styled.div `
font-weight: bold;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.4em;
height:46px;
`
const Heading =styled.div `
font-weight: 300;
font-size: 36px;
line-height: 42px;
letter-spacing: 0.4em;
height:46px;
`
const ServiceUse =styled.div `
margin-top:48px;
display:flex;
width:864px;
margin-left:auto;
margin-right:auto;
justify-content:space-between;
`
const UseCase =styled.div `
width:230px;
`