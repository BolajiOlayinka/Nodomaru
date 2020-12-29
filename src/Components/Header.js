import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem } from "reactstrap";
import Logo from "../assets/LogoWhite.png";
// import { HashLink as Link } from "react-router-hash-link";
// import translate from "../Providers/i18n/translate";
// import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";



export default function Header() {
  const [background, setBackground] = useState("black");
  const [fixed, setFixed] = useState("initial");
  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  // const [SmallBackground, setSmallBackground]=useState("black")

  const handleScroll = () => {
    
    if (window.pageYOffset > 0) {
      setBackground("rgba(0, 0, 0, 0.8)");
    } else {
      setBackground("black");
    }
  };
  const fixedScroll = () => {
    if (window.pageYOffset >= 180) {
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
    <NavWrapper background={background} fixed={fixed}>
      <StyledNavbar expand="sm">
        <div onClick={toggle} style={{ marginRight: "38px" }}>
          {showIcon ? (
            <StyledFontAwesome icon={faBars} />
          ) : (
            <StyledFontCancel icon={faTimesCircle} />
          )}
        </div>
        <LogoContainer>
          <Link to="/">
            <img src={Logo} alt="Standage Logo" />
          </Link>
        </LogoContainer>
        {showItem && (
          <StyledNav navbar>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/ja"
                onClick={toggle}
              >
                {translate("Home")}
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/news"
                onClick={toggle}
              >
                {translate("News")}
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/news" onClick={toggle}>
                {translate("Service")}
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/about"
                onClick={toggle}
              >
                {translate("About Us")}
              </StyledLink>
            </NavItem>
          </StyledNav>
        )}
        <LargeNav className="mx-auto">
          <StyledNav navbar>
            <NavItem>
              <StyledLink to="/">{translate("Home")}</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activeclassname="selected"
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/news"
              >
                {translate("News")}
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activeclassname="selected"
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/#digitrad"
              >
                {translate("Service")}
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/about"
              >
                {translate("About Us")}
              </StyledLink>
            </NavItem>
          </StyledNav>
        </LargeNav>

        <div className="ml-auto">
          <LanguageSwitcher />
        </div>
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
  transition: 0.4s all;
  width: -webkit-fill-available;
  @media (max-width: 576px) {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const LogoContainer = styled.div`
  img {
    width: 150px;
    height: 38px;
  }
`;
const StyledNav = styled(Nav)`
  margin: auto;
  @media (max-width: 576px) {
    position: fixed;
    padding-top: 60px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.9);
    z-index: 1;
    width: 100%;
    li {
      padding: 10px;
      a {
        font-size: 20px !important;
      }
    }
  }
`;
const StyledNavbar = styled(Navbar)`
  flex: auto;
  @media (min-width: 1201px) {
    flex: none;
    width: 1200px;
    margin: auto;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  line-height: 24px;
  margin-right: 33px;
  padding-bottom: 8px;
  font-weight: 300;
  font-size: 16px;

  :hover {
    color: #f8951d;
    cursor: pointer;
    text-decoration: none;

    border-bottom: 7px solid #f8951d;
  }
  :active {
    color: #f8951d;
    border-bottom: 7px solid #f8951d;
    transition: border-bottom 0.5s ease-in;
  }

  @media (max-width: 735px) {
    font-size: 12px;
    margin-right: 40px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
    line-height: 32px;
    padding-left: 0.5em;
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
  @media (min-width: 768px) {
    display: block;
  }
  @media (max-width: 767.9px) {
    display: none;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 2;
  position: absolute;
  top: 0;
  color: white;
  margin-top: 9px;
  margin-left: -2px;
  font-size: 24px;
`;
