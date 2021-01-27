import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import PostList from "./PostList";
import Logo from '../../assets/blue-logo.svg';

export default class News extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    
  };
  render() {
    return (
      <React.Fragment>
       <LogoSection>
        <img src={Logo} alt="Nodomaru Logo"/>
        <LogoText>ニュース</LogoText>
      </LogoSection>
        <Content>
          <Carousel />
     
          <PostList />
        </Content>
      </React.Fragment>
    );
  }
}
const LogoSection = styled.div `
width: 658px;
text-align:center;
margin:auto;
img{
    margin-top:79px;
}
@media(max-width:768px){
    width:90%;
}
`
const LogoText = styled.div `
font-weight: bold;
font-size: 36px;
line-height: 42px;
margin-bottom:79px;
color:#3CC5D1;
`
const Content = styled.div`
  @media (min-width: 1200px) {
    width: 752px;
    margin: auto;
    padding-bottom: 273px;
  }
  @media only screen and (max-width: 1199.9px) and (min-width: 769px) {
    width: 720px;
    margin: auto;
    padding-bottom: 30%;
  }
  @media only screen and (max-width: 768.9px) and (min-width: 375px) {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin: auto;
  }
 
`;
