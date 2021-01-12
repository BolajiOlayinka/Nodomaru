import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

export default function Client() {
  return (
    <Wrapper>
      <OwlCarousel
        items="1"
        loop
        autoplay
        dots
        className="d-lg-block d-lg-block d-lg-block d-lg-block"
      >
        <div className="item">
          <SliderText>
            オフィスは広尾駅から徒歩5分の場所にあり、日当たりがよく、緑あふれる居心地のいい空間です。現在みんなで作っている会社であり、社長に対して新規事業の提案や相談ができるチャンスもあります。。
          </SliderText>
          <QuoteName>AKINA</QuoteName>
        </div>
        <div className="item">
          <SliderText>
            オフィスは広尾駅から徒歩5分の場所にあり、日当たりがよく、緑あふれる居心地のいい空間です。現在みんなで作っている会社であり、社長に対して新規事業の提案や相談ができるチャンスもあります。
          </SliderText>
          <QuoteName>SHINGO</QuoteName>
        </div>
        <div className="item">
          <SliderText>
            オフィスは広尾駅から徒歩5分の場所にあり、日当たりがよく、緑あふれる居心地のいい空間です。現在みんなで作っている会社であり、社長に対して新規事業の提案や相談ができるチャンスもあります。
          </SliderText>
          <QuoteName>SHUZO</QuoteName>
        </div>
      </OwlCarousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
const SliderText = styled.div`
  color: black;
  font-size: 24px;
  line-height: 28px;
  text-align: justify;
  @media (max-width: 425px) {
    font-size: 12px;
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
`;
