import React from "react";
import styled from "styled-components";
import BannerImage from "../../assets/banner-6.png";
import SmallBannerImage from "../../assets/banner-6a.png";
import BannerImage2 from "../../assets/banner-7.png";
import BannerImage3 from "../../assets/banner-8.png";
import WhiteLogo from "../../assets/LogoWhite.png";
import ServiceIcon from "../../assets/service-icon.svg";
import { Link } from "react-router-dom";
import blueicon from "../../assets/icon-blue.svg";
import yellowicon from "../../assets/icon-yellow.svg";
import Smalldisplay from "../../assets/banner-7a.png";
import Smalldisplaytwo from "../../assets/banner-8a.png";

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
          <SmallDisplay>
            <img src={Smalldisplay} alt="Nodomaru display" />
          </SmallDisplay>
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
          <Connector></Connector>
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
          <img src={ServiceIcon} alt="Service Icon" />
          <UseButton>賃貸仲介「いえどき」</UseButton>
          <UseCaseBody>
            「いえどき」は、都内に４店舗を構えるブランドマンション、シリーズマンションを主に扱う賃貸仲介ブランドです。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={ServiceIcon} alt="Service Icon" />
          <UseButton>賃貸仲介「いえどき」</UseButton>
          <UseCaseBody>
            「いえどき」は、都内に４店舗を構えるブランドマンション、シリーズマンションを主に扱う賃貸仲介ブランドです。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={ServiceIcon} alt="Service Icon" />
          <UseButton>賃貸仲介「いえどき」</UseButton>
          <UseCaseBody>
            「いえどき」は、都内に４店舗を構えるブランドマンション、シリーズマンションを主に扱う賃貸仲介ブランドです。
          </UseCaseBody>
        </UseCase>
      </ServiceUse>
      <ButtonContainer>
        <ServiceButton>取り合わせ</ServiceButton>
      </ButtonContainer>
      <LineWrapper>
        <Line />
        <img src={blueicon} alt="Nodomaru Icon" />
        <Line />
      </LineWrapper>

      {/* Finance Section */}
      <Container>
        <FinanceWrapper>
          <LeftFinance>FP <br/>コンサルティング</LeftFinance>
          <SmallDisplay>
            <img src={Smalldisplaytwo} alt="Nodomaru display" />
          </SmallDisplay>
          <RightFinance>
            <RightFinanceHead>あなたにとって最適なプランを</RightFinanceHead>
            <RightFinanceBody>
              「十人十色」という言葉があるように幸せの定義は人それぞれ違います。
              必要な事は、その幸せを実現するための情報です。
              どんなところに資産をお使いかでその方の価値観がわかります。
              弊社では、お客様にとっての「のどまる人生」をベースにひとりひとりのお話をよく聴き、生涯を通して最適なライフプランをご提案いたします。
            </RightFinanceBody>
          </RightFinance>
        </FinanceWrapper>
      </Container>
      <FinanceBanner>
        <Container>
          <FinanceConnector></FinanceConnector>
        </Container>
      </FinanceBanner>
      <FinanceServicePoint>
        <Container>
          <FinancePreHeading>FINANCIAL PLANNING & CONSULTING</FinancePreHeading>
          <FinanceHeading>OUR KEY SERVICE POINTS</FinanceHeading>
        </Container>
      </FinanceServicePoint>
      <ServiceUse>
        <UseCase>
          <img src={ServiceIcon} alt="Service Icon" />
          <FinancialUseButton>保険見直し</FinancialUseButton>
          <UseCaseBody>
            本当に必要な保険は人によって違います。ファイナンシャルプランナーがフラットな立場から、最適なアドバイスをいたします。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={ServiceIcon} alt="Service Icon" />
          <FinancialUseButton>資産運用</FinancialUseButton>
          <UseCaseBody>
            老後資金、教育資金など「お金」にまつわる様々なお悩みについて、ファイナンシャルプランナーがご相談に応じます。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={ServiceIcon} alt="Service Icon" />
          <FinancialUseButton>各種セミナー</FinancialUseButton>
          <UseCaseBody>
            保険や不動産のセミナーだけでなく、経営者や営業職の方向けに売り上げを上げるセミナーも開催しております。
          </UseCaseBody>
        </UseCase>
      </ServiceUse>
      <ButtonContainer>
        <FinanceButton>取り合わせ</FinanceButton>
      </ButtonContainer>
      <FinanceLineWrapper>
        <FinanceLine />
        <img src={yellowicon} alt="Nodomaru Icon" />
        <FinanceLine />
      </FinanceLineWrapper>
    </React.Fragment>
  );
}
const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
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
  @media (max-width: 576px) {
    background: url(${SmallBannerImage});
  }
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
  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 400px;
    }
  }
  @media (max-width: 426px) {
    img {
      width: 300px;
    }
  }
`;
const RealEstateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1078px;
  margin: auto;
  padding-top: 47px;
  padding-bottom: 47px;
  @media (max-width: 1200px) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const SmallDisplay = styled.div`
  img {
    width: 100%;
  }
  @media (min-width: 576.1px) {
    display: none;
  }
`;
const LeftEstate = styled.div`
  font-weight: 700;
  padding-right: 45px;
  font-size: 55px;
  line-height: 75px;
  @media (max-width: 1200px) {
    padding-right: 35px;
    font-size: 40px;
    line-height: 60px;
    width: 200px;
    text-align: center;
  }
  @media (max-width: 991px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    padding-right: 25px;
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 55px;
    line-height: 75px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const RightEstate = styled.div`
  border-left: 1px solid #3cc5d1;
  padding-left: 45px;
  width: 718px;
  @media (max-width: 1200px) {
    padding-left: 35px;
  }
  @media (max-width: 991px) {
    width: 760px;
  }
  @media (max-width: 768px) {
    width: 570px;
    padding-left: 25px;
  }
  @media (max-width: 576px) {
    width:100%;
    padding: 0px;
    border: transparent;
  }
`;
const RightEstateHead = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  height: 59px;
  @media (max-width: 991px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    height: 68px;
  }
  @media (max-width: 576px) {
    font-size: 32px;
    line-height: 44px;
    width: 289px;
    margin: auto;
    height: 100%;
    padding-top: 20px;
  }
`;
const RightEstateBody = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (max-width: 576px) {
    width: 289px;
    padding-top: 37px;
    padding-bottom: 37px;
    margin: auto;
  }
`;
const BannerConnector = styled.div`
  background: url(${BannerImage2});
  background-size: cover;
  height: 400px;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
const Connector = styled.div`
  background-color: #3cc5d1;
  position: absolute;
  margin-top: 173px;
  width: 20px;
  height: 311px;
  left: 117px;
  @media (max-width: 768px) {
    height: 210px;
    left: 10%;
  }
`;
const EstateServicePoint = styled.div`
  padding-top: 64px;
  text-align: center;
  margin: auto;
  @media (max-width: 576px) {
    padding-top: 0px;
  }
`;
const PreHeading = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.4em;
  height: 46px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.3em;
  }
  @media (max-width: 426px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.4em;
    height: 46px;
  }
`;
const Heading = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.4em;
  height: 46px;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: 0.3em;
  }
  @media (max-width: 426px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.425em;
    height: 46px;
    margin-bottom: 20px;
  }
`;
const ServiceUse = styled.div`
  margin-top: 48px;
  display: flex;
  width: 864px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  @media (max-width: 991px) {
    width: 760px;
  }
  @media (max-width: 768px) {
    width: 400px;
    margin: auto;
    flex-direction: column;
  }
  @media (max-width: 426px) {
    width: 90%;
    margin: auto;
  }
`;
const UseCase = styled.div`
  width: 230px;
  text-align: center;
  img {
    width: 100px;
    margin-bottom: 31px;
  }
  @media (max-width: 768px) {
    width: 400px;
    margin-bottom: 20px;
  }
  @media (max-width: 426px) {
    margin-bottom: 20px;
    width: 90%;
    margin: auto;

    img {
      margin: auto;
      margin-bottom: 31px;
    }
  }
`;
const UseButton = styled.div`
  width: 230px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3cc5d1;
  border: 1px solid #3cc5d1;
  border-radius: 4px;
  margin-bottom: 31px;
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 31px;
  }
`;
const UseCaseBody = styled.div`
  width: 184px;
  text-align: justify;
  margin: auto;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: black;
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const ServiceButton = styled(Link)`
  width: 140px;
  height: 45px;
  background-color: #3cc5d1;
  color: white;
  border-radius: 4px;
  font-size: 18px;

  padding: 12px 25px 12px 25px;
`;
const LineWrapper = styled.div`
  width: 1094px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  img {
    width: 35px;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const Line = styled.hr`
  border: 1px solid #3cc5d1;
  width: 508px;
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 991px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 576px) {
    width: 150px;
  }
  @media (max-width: 425px) {
    width: 120px;
  }
`;

// Finance Section

const FinanceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1078px;
  margin: auto;
  padding-top: 47px;
  padding-bottom: 47px;
  @media (max-width: 1200px) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const LeftFinance = styled.div`
  padding-right: 45px;
  font-weight: bold;
  font-size: 35px;
  line-height: 48px;
  width: 190px;
  @media (max-width: 1200px) {
    padding-right: 35px;
    font-size: 40px;
    line-height: 60px;
    width: 200px;
  }
  @media (max-width: 991px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    padding-right: 25px;
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 576px) {
    font-size: 55px;
    line-height: 75px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align:center;
  }
`;
const RightFinance = styled.div`
  border-left: 1px solid var(--mainYellow);
  padding-left: 45px;
  width: 718px;
  @media (max-width: 1200px) {
    padding-left: 35px;
  }
  @media (max-width: 991px) {
    width: 760px;
  }
  @media (max-width: 768px) {
    width: 570px;
    padding-left: 25px;
  }
  @media (max-width: 576px) {
    padding: 0px;
    border: transparent;
    width:100%;
  }
`;
const RightFinanceHead = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  height: 59px;
  @media (max-width: 991px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 32px;
    height: 40px;
  }
  @media (max-width: 576px) {
    font-size: 35px;
    line-height: 48px;
    width: 289px;
    margin: auto;
    height: 100%;
    padding-top: 20px;
    text-align:center;
  }
`;
const RightFinanceBody = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (max-width: 576px) {
    width: 289px;
    padding-top: 37px;
    padding-bottom: 37px;
    margin: auto;
  }
`;
const FinanceBanner = styled.div`
  background: url(${BannerImage3});
  background-size: cover;
  height: 400px;
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
const FinanceConnector = styled.div`
  background-color: var(--mainYellow);
  position: absolute;
  margin-top: 173px;
  width: 20px;
  height: 311px;
  left: 117px;
  @media (max-width: 768px) {
    height: 210px;
    left: 10%;
  }
`;
const FinanceServicePoint = styled.div`
  padding-top: 64px;
  text-align: center;
  margin: auto;
  @media (max-width: 576px) {
    padding-top: 0px;
  }
`;
const FinancePreHeading = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.4em;
  height: 46px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.3em;
  }
  @media (max-width: 426px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.4em;
    height: 96px;
  }
`;
const FinanceHeading = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.4em;
  height: 46px;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: 0.3em;
  }
  @media (max-width: 426px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.425em;
    height: 46px;
    margin-bottom: 20px;
  }
`;
const FinanceButton = styled(Link)`
  width: 140px;
  height: 45px;
  background-color: var(--mainYellow);
  color: black;
  border-radius: 4px;
  font-size: 18px;
  padding: 12px 25px 12px 25px;
`;
const FinancialUseButton = styled.div`
  width: 230px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border: 1px solid var(--mainYellow);
  border-radius: 4px;
  margin-bottom: 31px;
  font-weight: bold;
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 31px;
  }
`;
const FinanceLineWrapper = styled.div`
  width: 1094px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 62px;
  img {
    width: 35px;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 85%;
  }
  @media (max-width: 425px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const FinanceLine = styled.hr`
  border: 1px solid var(--mainYellow);
  width: 508px;
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 991px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
  @media (max-width: 576px) {
    width: 150px;
  }
  @media (max-width: 425px) {
    width: 120px;
  }
`;
