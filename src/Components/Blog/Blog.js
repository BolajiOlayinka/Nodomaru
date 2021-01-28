import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import PostList from "./PostList";
import Logo from "../../assets/blue-logo.svg";

export default class News extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <React.Fragment>
        <LogoSection>
          <img src={Logo} alt="Nodomaru Logo" />
          <LogoText>ニュース</LogoText>
        </LogoSection>
        <Content>
          <Carousel />
        </Content>
        <PostList />
      </React.Fragment>
    );
  }
}
const LogoSection = styled.div`
  width: 658px;
  text-align: center;
  margin: auto;
  img {
    margin-top: 150px;
  }
  @media (max-width: 768px) {
    width: 70%;
    img {
      width: 400px;
    }
  }
  @media (max-width: 576px) {
    img {
      width: 70%;
      margin: auto;
      margin-top: 50px;
    }
  }
`;
const LogoText = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 79px;
  color: #3cc5d1;
  @media (max-width: 576px) {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 50px;
  }
`;
const Content = styled.div`
  @media (min-width: 1200px) {
    width: 752px;
    margin: auto;
  }
  @media only screen and (max-width: 1199.9px) and (min-width: 769px) {
    width: 720px;
    margin: auto;
  }
  @media only screen and (max-width: 768.9px) and (min-width: 375px) {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin: auto;
  }
`;
