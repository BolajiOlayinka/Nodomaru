import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem } from "reactstrap";
import Logo from "../assets/icon.svg";
import BlackLogo from "../assets/icon-black.svg";
import BlueLogo from "../assets/icon-blue.svg";
import YellowLogo from "../assets/icon-yellow.svg";
import { Link, useLocation } from "react-router-dom";
import { HashLink as Linker } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import animateScrollTo from "animated-scroll-to";

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [background, setBackground] = useState("transparent");
  const [boxshadow, setBoxShadow] = useState("transparent");
  const [fixed, setFixed] = useState("fixed");
  const [logo, setLogo] = useState(BlackLogo);
  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  const [navcolor, setNavColor] = useState("black");
  const [activeservice, setActiveService] = useState("");
  const [activeabout, setActiveAbout] = useState("");
  const [activenews, setActiveNews] = useState("");

  // const [SmallBackground, setSmallBackground]=useState("black")
  const ScrollToTop = () => {
    animateScrollTo(0);
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setLogo(Logo);
      setNavColor("black");

      setActiveService("transparent");
      setActiveAbout("transparent");
      setActiveNews("transparent");
    } else if (location.pathname === "/about") {
      setLogo(Logo);
      setActiveAbout("5px solid white");

      setActiveService("transparent");
      setActiveNews("transparent");
      setNavColor("white");
    } else if (location.pathname === "/service") {
      setLogo(YellowLogo);
      setActiveService("5px solid white");

      setActiveAbout("transparent");
      setActiveNews("transparent");
      setNavColor("white");
    } else if (
      location.pathname === "/news" ||
      location.pathname === "/news/:id"
    ) {
      setActiveNews("5px solid black");

      setActiveAbout("transparent");
      setActiveService("transparent");
      setNavColor("black");
      setLogo(BlueLogo);
    } else {
      setLogo(Logo);
    }
  }, [location.pathname]);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBackground("white");
      setLogo(BlackLogo);
      setBoxShadow("0 0 10px rgba(0,0,0,0.2)");
      setNavColor("black");
    } else {
      setLogo(BlackLogo);
      setBackground("transparent");
      setBoxShadow("transparent");
      setNavColor("black");
    }
  };

  const ScrollActive = () => {
    if (window.pageYOffset > 0 && location.pathname === "/service") {
      setActiveService("5px solid black");
    } else {
      setActiveService("");
    }
    if (window.pageYOffset > 0 && location.pathname === "/about") {
      setActiveAbout("5px solid black");
    } else {
      setActiveAbout("");
    }
    if (
      window.pageYOffset > 0 &&
      (location.pathname === "/news" || location.pathname === "/news/:id")
    ) {
      setActiveNews("5px solid black");
    } else {
      setActiveNews("");
    }
  };
  const fixedScroll = () => {
    if (window.pageYOffset >= 0) {
      setFixed("fixed");
    } else {
      setFixed("initial");
    }
  };

  // console.log(window.innerWidth)
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", fixedScroll);
  window.addEventListener("scroll", ScrollActive);

  const toggle = (e) => {
    setShowItem(!showItem, e);
    setShowIcon(!showIcon, e);
  };

  const closeModal = () => {
    setShowItem(false);
    setShowIcon(true)
  };
  return (
    <NavWrapper background={background} boxshadow={boxshadow} fixed={fixed}>
      <StyledNavbar expand="md">
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="Nodomaru Logo" />
          </Link>
        </LogoContainer>
        {showItem && (
          <SmallNav>
            <StyledNav navbar>
              <NavItem>
                <StyledLink
                  to="/news"
                  activenews={activenews}
                  onClick={closeModal}
                >
                  ニュース
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledContactLink to="/#contactform" onClick={closeModal}>
                  お問い合わせ
                </StyledContactLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/about"
                  activeabout={activeabout}
                  onClick={() => {
                    closeModal();
                    ScrollToTop();
                  }}
                >
                  ABOUT
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/service"
                  activeservice={activeservice}
                  onClick={closeModal}
                >
                  サービス
                </StyledLink>
              </NavItem>
            </StyledNav>
          </SmallNav>
        )}
        <div onClick={toggle}>
          {showIcon ? (
            <StyledFontAwesome icon={faBars} navcolor={navcolor} />
          ) : (
            <StyledFontCancel icon={faTimesCircle} navcolor={navcolor} />
          )}
        </div>

        <LargeNav className="ml-auto">
          <StyledNav navbar>
            <NavItem>
              <StyledLink
                navcolor={navcolor}
                activenews={activenews}
                to="/news"
                onClick={() => {
                  ScrollToTop();
                }}
              >
                ニュース
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledContactLink navcolor={navcolor} to="/#contactform">
                お問い合わせ
              </StyledContactLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/about"
                navcolor={navcolor}
                activeabout={activeabout}
                onClick={() => {
                  ScrollToTop();
                }}
              >
                ABOUT
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/service"
                navcolor={navcolor}
                activeservice={activeservice}
                onClick={() => {
                  ScrollToTop();
                }}
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
  @media(max-width:768px){
    padding-top:0.2em;
    padding-bottom:0.2em;
  } 
`;
const LogoContainer = styled.div`
  img {
    width: 48px;
    height: 48px;
  }
  @media (max-width: 576px) {
    z-index: 10;
    ${"" /* padding-right:20px; */}
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
    z-index: 5;
    width: 100%;
    ${'' /* padding-top: 80px; */}
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
    padding-right: 20px;

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
  border-bottom: ${(props) => props.activehome} !important;
  border-bottom: ${(props) => props.activeservice} !important;
  border-bottom: ${(props) => props.activeabout} !important;
  border-bottom: ${(props) => props.activenews} !important;
  :hover {
    color: var(--mainGreen);
    cursor: pointer;
    text-decoration: none;
  }
  :active {
    color: var(--mainGreen);
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
    position: relative;
    z-index: 10;
    color: white;
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
const StyledContactLink = styled(Linker)`
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
  }
  :active {
    color: var(--mainGreen);

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
    position: relative;
    z-index: 10;
    color: white;
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
const SmallNav = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: ${(props) => props.navcolor} !important;
  font-size: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 10;
  position: absolute;
  top: 0;
  color: white;
  margin-top: 18px;
  font-size: 24px;
  right: 28px;
  @media (min-width: 768px) {
    display: none;
  }
`;
