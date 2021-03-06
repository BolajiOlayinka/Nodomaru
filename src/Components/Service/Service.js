import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import BannerImage from "../../assets/banner-6.jpg";
import SmallBannerImage from "../../assets/banner-6a.jpg";
import BannerImage2 from "../../assets/banner-7.jpg";
import BannerImage3 from "../../assets/banner-8.jpg";
import BannerImage4 from "../../assets/banner-9.jpg";
import WhiteLogo from "../../assets/LogoWhite.png";
import Keys from "../../assets/keys.svg";
import Percent from "../../assets/percent.svg";
import Growth from "../../assets/growth.svg";
import Secure from "../../assets/secure.svg";
import Yen from "../../assets/yen.svg";
import Chart from "../../assets/chart.svg";
import Find from "../../assets/find.svg";
import Message from "../../assets/message.svg";
import Share from "../../assets/share.svg";
import { HashLink as Linker } from "react-router-hash-link";
import blueicon from "../../assets/icon-blue.svg";
import yellowicon from "../../assets/icon-yellow.svg";
import blackicon from "../../assets/icon-black.svg";
import Smalldisplay from "../../assets/banner-7c.jpg";
import Smalldisplaytwo from "../../assets/banner-8a.jpg";
import Smalldisplaythree from "../../assets/banner-9a.jpg";
import animateScrollTo from "animated-scroll-to";

export default function Service() {
  // useEffect(() => {
  //   animateScrollTo(0);
  // }, []);
  const ScrollToSectionOne = () => {
    animateScrollTo(document.querySelector(".SectionOne"));
  };
  const ScrollToSectionTwo = () => {
    animateScrollTo(document.querySelector(".SectionTwo"));
  };
  const ScrollToSectionThree = () => {
    animateScrollTo(document.querySelector(".SectionThree"));
  };
  const ScrollToContact = () => {
    animateScrollTo(document.querySelector(".contactform"));
  };

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
          <BannerContent>
            <div>
              <img src={WhiteLogo} alt="Nodomaru Logo" />
              <div>サービス案内</div>
              <SectionWrapper id="realestate">
                <Section
                  onClick={() => {
                    ScrollToSectionOne();
                  }}
                >
                  不動産
                </Section>
                <Section
                  onClick={() => {
                    ScrollToSectionTwo();
                  }}
                >
                  転職コンサルティング
                </Section>
                <Section
                  className="SectionOne"
                  onClick={() => {
                    ScrollToSectionThree();
                  }}
                >
                  FP コンサルティング
                </Section>
              </SectionWrapper>
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

      <Container>
        <BannerConnector>
          <Connector data-aos="slide-up"></Connector>
        </BannerConnector>
      </Container>

      <EstateServicePoint>
        <Container>
          <PreHeading>REAL ESTATE</PreHeading>
          <Heading>OUR KEY SERVICE POINTS</Heading>
        </Container>
      </EstateServicePoint>
      <ServiceUse>
        <UseCase>
          <img src={Keys} alt="Service Icon" />
          <UseButton>賃貸仲介「いえどき」</UseButton>
          <UseCaseBody>
            「いえどき」は、都内に４店舗を構えるブランドマンション、シリーズマンションを主に扱う賃貸仲介ブランドです。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={Percent} alt="Service Icon" />
          <UseButton>居住用売買</UseButton>
          <UseCaseBody>
            お客様の購入、売却、リフォームの希望に お応えします。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={Growth} alt="Service Icon" />
          <UseButton>賃貸仲介「いえどき」</UseButton>
          <UseCaseBody>
            「購入、売却、運用
            攻めるときも守るときも、最適なアドバイスをいたします。
          </UseCaseBody>
        </UseCase>
      </ServiceUse>
      <ButtonContainer>
        <ServiceButton
          to="/#contactform"
          onClick={() => {
            ScrollToContact();
          }}
        >
          お問い合わせ
        </ServiceButton>
      </ButtonContainer>
      <LineWrapper id="careerconsult" className="SectionTwo">
        <Line />
        <img src={blueicon} alt="Nodomaru Icon" />
        <Line />
      </LineWrapper>

      {/* Consult Section */}
      <Container>
        <FinanceWrapper>
          <LeftConsult>
            転職 <br />
            コンサルティング
          </LeftConsult>
          <SmallDisplay>
            <img src={Smalldisplaythree} alt="Nodomaru display" />
          </SmallDisplay>
          <RightConsult>
            <RightConsultHead>
              あなたの人生に寄り添った仕事選びを
            </RightConsultHead>
            <RightFinanceBody>
              多様性の時代の中、誰もが「のどまる人生」を実現する社会を目指し、一人一人の多様な生き方、働き方をサポートします。一人のコンサルタントが、企業への人材ニーズのヒアリングおよび転職希望者に対する転職サポートを担当するため、ミスマッチを防ぎ、あなたの人生に寄り添ったコンサルティングが可能になります。
            </RightFinanceBody>
          </RightConsult>
        </FinanceWrapper>
      </Container>
      <Container>
        <ConsultBanner>
          <ConsultConnector data-aos="slide-up"></ConsultConnector>
        </ConsultBanner>
      </Container>

      <FinanceServicePoint>
        <Container>
          <FinancePreHeading>CAREER CONSULTATION</FinancePreHeading>
          <FinanceHeading>OUR KEY SERVICE POINTS</FinanceHeading>
        </Container>
      </FinanceServicePoint>
      <ServiceUse>
        <UseCase>
          <img src={Find} alt="Service Icon" />
          <ConsultUseButton>リクルーティングアドバイザー</ConsultUseButton>
          <UseCaseConsultBody>
            企業様ごとの採用課題に対して、ニーズに合わせた人材をご紹介致します。
          </UseCaseConsultBody>
        </UseCase>

        <UseCase>
          <img src={Message} alt="Service Icon" />
          <ConsultUseButton>キャリアアドバイザー</ConsultUseButton>
          <UseCaseConsultBody>
            まずは求職者の『人生』に真摯に向き合い、キャリアアドバイザーがじっくり時間をかけ転職をサポートします。
          </UseCaseConsultBody>
        </UseCase>

        <UseCase>
          <img src={Share} alt="Service Icon" />
          <ConsultUseButton>マッチング</ConsultUseButton>
          <UseCaseBody>
            求人企業と求職者との最適なマッチングを実現させ、社会全体の雇用問題を解決します。
          </UseCaseBody>
        </UseCase>
      </ServiceUse>
      <ButtonContainer>
        <ConsultButton to="/#contactform" onClick={ScrollToContact}>
          お問い合わせ
        </ConsultButton>
      </ButtonContainer>
      <FinanceLineWrapper>
        <ConsultLine id="financeplan" className="SectionThree" />
        <img src={blackicon} alt="Nodomaru Icon" />
        <ConsultLine />
      </FinanceLineWrapper>

      {/* Finance Section */}
      <Container>
        <FinanceWrapper>
          <LeftFinance>
            FP <br />
            コンサルティング
          </LeftFinance>
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
      <Container>
        <FinanceBanner>
          <FinanceConnector data-aos="slide-up"></FinanceConnector>
        </FinanceBanner>
      </Container>

      <FinanceServicePoint>
        <Container>
          <FinancePreHeading>FINANCIAL PLANNING & CONSULTING</FinancePreHeading>
          <FinanceHeading>OUR KEY SERVICE POINTS</FinanceHeading>
        </Container>
      </FinanceServicePoint>
      <ServiceUse>
        <UseCase>
          <img src={Secure} alt="Service Icon" />
          <FinancialUseButton>保険見直し</FinancialUseButton>
          <UseCaseBody>
            本当に必要な保険は人によって違います。ファイナンシャルプランナーがフラットな立場から、最適なアドバイスをいたします。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={Yen} alt="Service Icon" />
          <FinancialUseButton>資産運用</FinancialUseButton>
          <UseCaseBody>
            老後資金、教育資金など「お金」にまつわる様々なお悩みについて、ファイナンシャルプランナーがご相談に応じます。
          </UseCaseBody>
        </UseCase>

        <UseCase>
          <img src={Chart} alt="Service Icon" />
          <FinancialUseButton>各種セミナー</FinancialUseButton>
          <UseCaseBody>
            保険や不動産のセミナーだけでなく、経営者や営業職の方向けに売り上げを上げるセミナーも開催しております。
          </UseCaseBody>
        </UseCase>
      </ServiceUse>
      <ButtonContainer>
        <FinanceButton to="/#contactform" onClick={ScrollToContact}>
          お問い合わせ
        </FinanceButton>
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
  border-bottom: 5px solid var(--lightBlue);

  @media (min-width: 2000px) {
    height: 400px;
  }
  @media (max-width: 576px) {
    background: url(${SmallBannerImage});
  }
`;
const SectionWrapper = styled.div`
  display: flex;
  width: 596px;
  justify-content: space-between;
  margin: auto;
  margin-top: 12px;
  @media (max-width: 768px) {
    width: 310px;
    margin: auto;
    margin-top: 14px;
  }
`;
const Section = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  border: 1px solid white;
  width: 182px;
  height: 37px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.8);
    transition: all 0.2s;
    color: white !important;
    text-decoration: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    width: 119px;
    :first-child {
      width: 50px;
    }
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
  width: 730px;
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
    width: 100%;
    padding: 0px;
    border: transparent;
  }
`;
const RightEstateHead = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 49px;
  // height: 59px;
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

  ${"" /* height: 46px; */}
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.3em;
    width: 80%;
    margin: auto;
    padding-bottom: 11px;
  }
  @media (max-width: 426px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.4em;
    padding-bottom: 11px;
    width: 100%;
    ${"" /* height: 46px; */}
  }
`;
const Heading = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.4em;

  padding-top: 11px;
  ${"" /* height: 46px; */}
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: 0.3em;
    width: 80%;
    margin: auto;
  }
  @media (max-width: 426px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.425em;
    ${"" /* height: 46px; */}
    margin-bottom: 20px;
    width: 100%;
  }
`;
const ServiceUse = styled.div`
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
    width: 150px;
    margin-bottom: 40px;
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    width: 400px;
    margin-bottom: 20px;
    img {
      width: 100px;
      margin-bottom: 31px;
      margin-top: 31px;
    }
  }
  @media (max-width: 426px) {
    margin-bottom: 20px;
    width: 90%;
    margin: auto;

    img {
      width: 100px;
      margin-bottom: 31px;
      margin-top: 31px;
    }
    :nth-child(1) {
      img {
        margin-top: 0px;
      }
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
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: black;
  @media (max-width: 768px) {
    width: 200px;
  }
`;
const UseCaseConsultBody = styled.div`
  width: 184px;
  text-align: justify;
  margin: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: black;
  @media (max-width: 768px) {
    width: 235px;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const ServiceButton = styled(Linker)`
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
    font-size: 35px;
    font-weight: bold;
    line-height: 48px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    width: 330px;
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
    width: 100%;
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
    text-align: center;
  }
`;
const RightConsultHead = styled.div`
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
    width: 80%;
    margin: auto;
    height: 100%;
    padding-top: 20px;
    text-align: center;
  }
  @media (max-width: 426px) {
    font-size: 32px;
    line-height: 44px;
    width: 95%;
    margin: auto;
    height: 100%;
    padding-top: 20px;
    text-align: center;
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
  ${
    "" /* @media(min-width:2000px){
    height:600px;
  }
  @media(min-width:2500px){
    height:700px;
  } */
  }
`;
const FinanceConnector = styled.div`
  background-color: var(--mainYellow);
  position: absolute;
  margin-top: 173px;
  width: 20px;
  height: 311px;
  left: 117px;
  }
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
  padding-bottom: 11px;

  ${"" /* height: 46px; */}
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.3em;
    padding-bottom: 11px;
    width: 80%;
    margin: auto;
  }
  @media (max-width: 426px) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.4em;
    width: 100%;
    ${"" /* height: 96px; */}
  }
`;
const FinanceHeading = styled.div`
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.4em;

  ${"" /* height: 46px; */}
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 32px;
    letter-spacing: 0.3em;
    width: 80%;
    margin: auto;
    padding-top: 11px;
  }
  @media (max-width: 426px) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.425em;
    ${"" /* height: 46px; */}
    margin-bottom: 20px;
    width: 100%;
  }
`;
const FinanceButton = styled(Linker)`
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
const LeftConsult = styled.div`
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
    font-size: 35px;
    line-height: 48px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    width: 350px;
  }
`;
const RightConsult = styled.div`
  border-left: 1px solid black;
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
    width: 100%;
  }
`;
const ConsultConnector = styled.div`
  background-color: black;
  position: absolute;
  margin-top: 173px;
  width: 20px;
  height: 311px;
  left: 117px;
  }
  @media (max-width: 768px) {
    height: 210px;
    left: 10%;
  }
`;
const ConsultBanner = styled.div`
  background: url(${BannerImage4});
  background-size: cover;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 576px) {
    display: none;
  }
  ${
    "" /* @media(min-width:2000px){
    height:600px;
  }
  @media(min-width:2500px){
    height:700px;
  } */
  }
`;
const ConsultUseButton = styled.div`
  width: 230px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 31px;
  font-weight: bold;
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 31px;
  }
`;
const ConsultButton = styled(Linker)`
  width: 140px;
  height: 45px;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-size: 18px;
  padding: 12px 25px 12px 25px;
`;
const ConsultLine = styled.hr`
  border: 1px solid black;
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
