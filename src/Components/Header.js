import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem } from "reactstrap";
import Logo from "../assets/icon.svg";
import BlackLogo from "../assets/icon-black.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [background, setBackground] = useState("transparent");
  const [boxshadow, setBoxShadow] = useState("transparent");
  const [fixed, setFixed] = useState("fixed");
  const [logo, setLogo] = useState(Logo);
  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  const [navcolor, setNavColor] =useState('white');
  // const [SmallBackground, setSmallBackground]=useState("black")

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBackground("white");
      setLogo(BlackLogo);
      setBoxShadow("0 0 10px rgba(0,0,0,0.2)");
      setNavColor('black')
    } else {
      setLogo(Logo);
      setBackground("transparent");
      setBoxShadow("transparent");
      setNavColor('white')
    }
  };
  const fixedScroll = () => {
    if (window.pageYOffset >= 0) {
      setFixed("fixed");
    } else {
      setFixed("initial");
    }
  };
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", fixedScroll);

  const toggle = (e) => {
    setShowItem(!showItem, e);
    setShowIcon(!showIcon, e);
  };

  return (
    <NavWrapper background={background} boxshadow={boxshadow} fixed={fixed}>
      <StyledNavbar expand="md">
        <div onClick={toggle}>
          {showIcon ? (
            <StyledFontAwesome icon={faBars} />
          ) : (
            <StyledFontCancel icon={faBars} />
          )}
        </div>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="Digitrad Logo" />
          </Link>
        </LogoContainer>
        {showItem && (
          <StyledNav navbar>
            <NavItem>
              <StyledLink to="/">ニュース</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink>お問い合わせ</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to ="/about">ABOUT</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to ="/service">サービス</StyledLink>
            </NavItem>
            

          </StyledNav>
        )}
        <LargeNav className="ml-auto">
          <StyledNav navbar>
            <NavItem>
              <StyledLink navcolor={navcolor} to="/" >
                ニュース
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink  navcolor={navcolor} to="/">
                お問い合わせ
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
               
               to="/about"
               navcolor={navcolor}
              >
                ABOUT
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
               
               to="/service"
               navcolor={navcolor}
              >
                サービス
              </StyledLink>
            </NavItem>
          </StyledNav>
        </LargeNav>
      </StyledNavbar>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  z-index: 12;
  display: flex;
  flex: auto;
  align-items: center;
  position: ${(props) => props.fixed} !important;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #373737;
  background: ${(props) => props.background} !important;
  box-shadow: ${(props) => props.boxshadow} !important;
  transition: 0.5s all;
  width: -webkit-fill-available;
  ${'' /* @media(max-width:576px){
    width:90%;
  } */}
 
`;
const LogoContainer = styled.div`
  img {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 576px) {
    z-index: 2;
    ${'' /* padding-right:20px; */}
  }
`;
const StyledNav = styled(Nav)`
  margin: auto;
  @media (max-width: 767.9px) {
    position: fixed;
    padding-top: 60px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.9);
    z-index: 1;
    width: 100%;
    padding-top: 80px;
    li {
      padding: 4px;
      padding-left: 20px;
      a {
        font-size: 14px !important;
      }
    }
  }
`;
const StyledNavbar = styled(Navbar)`
  flex: auto;
  @media (min-width: 1200px) {
    flex: none;
    width: 1117px;
    margin: auto;
    padding-left: 20px;
    padding-right:20px;

    ${"" /* -ms-ime-width:1200px; */}
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 768px) and (max-width: 1023.9px) {
    padding-left: 50px;
    padding-right: 30px;
  }
  @media (max-width: 767.9px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.navcolor} !important;
  line-height: 24px;
  margin-right: 33px;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 16px;

  :hover {
    color: var(--mainGreen);
    cursor: pointer;
    text-decoration: none;

    border-bottom: 2px solid var(--mainGreen);
  }
  :active {
    color: var(--mainGreen);
    border-bottom: 2px solid var(--mainGreen);
    transition: border-bottom 0.5s ease-in;
  }

  @media (max-width: 735px) {
    font-size: 12px;
    margin-right: 40px;
  }
  @media (max-width: 767.9px) {
    font-size: 13px;
    line-height: 32px;
    padding-left: 0.5em;
    position:relative;
z-index: 10;
color:white;
    :hover {
      border-bottom: 0px;
    }
    :active {
      border-bottom-color: transparent !important;
      border-bottom-style: none !important;
      border-bottom-width: 0 !important;
    }
  }
`;

const LargeNav = styled.div`
  @media (max-width: 767.9px) {
    display: none;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: black;
  font-size: 20px;

  @media (min-width: 767.9px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 10;
  position: absolute;
  top: 0;
  color: white;
  margin-top: 14px;
  ${"" /* margin-left: -2px; */}
  font-size: 20px;
`;
