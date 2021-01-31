import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner";
import Logo from "../../assets/blue-logo.svg";
import renderHTML from "react-render-html";
import DayJS from "react-dayjs";
import BackgroundImage from "../../assets/bus.png";

export default class News extends Component {
  state = {
    postDetails: [],
    media: [],
    category: [],
    author: [],
  };

  componentDidMount() {
    // console.log(this.props.match.params);
    window.scrollTo(0, 0);
    axios
      .get(`https://ndmr.co.jp/blog/?rest_route=/wp/v2/posts`)
      .then((responsee) => {
        //   console.log(responsee)
        this.setState({ AllIDs: responsee.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://ndmr.co.jp/blog/?rest_route=/wp/v2/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        // console.log(res);
        axios
          .get(
            `https://ndmr.co.jp/blog/?rest_route=/wp/v2/media/${res.data.featured_media}`
          )
          .then((response) => {
            // console.log(response)
            this.setState({ media: response.data.guid.rendered });
          })
          .catch((response) => {
            console.log(response.err);
          });
        axios
          .get(
            `https://ndmr.co.jp/blog/?rest_route=/wp/v2/categories&post=${res.data.id}`
          )
          .then((resp) => {
            console.log(resp);
            this.setState({ category: resp.data["0"] });
          })
          .catch((response) => {
            console.log(response.err);
          });
        axios
          .get(
            `https://ndmr.co.jp/blog/?rest_route=/wp/v2/users/${res.data.author}`
          )
          .then((resp) => {
            this.setState({ author: resp.data });
          })
          .catch((response) => {
            console.log(response.err);
          });

        this.setState({
          postDetails: res.data,
        });
      });
  }
  render() {
    const { postDetails, media, category, author } = this.state;
    // console.log(this.state.IDArray)

    return (
      <React.Fragment>
        <LogoSection>
          <img src={Logo} alt="Nodomaru Logo" />
          <LogoText>ニュース</LogoText>
        </LogoSection>
        {postDetails.length === 0 || postDetails === undefined ? (
          <div style={{ marginBottom: "15em", marginTop: "15em" }}>
            <Spinner />
          </div>
        ) : (
          <Content>
            <ImageHead src={media} alt="Featured" />

            <ImageSub>
              <DisplayLeft>
                <p>
                  <StyledFontAwesome icon={faCalendarWeek} />
                  <DayJS format="YYYY-MM-DD">{postDetails.date}</DayJS>
                </p>

                <p>
                  <StyledFontAwesome icon={faUserCircle} />
                  PR Team
                </p>
              </DisplayLeft>
              <DisplayRight>
                <CeoBtn>{author.name}</CeoBtn>
                <EventsBtn>{category.name}</EventsBtn>
              </DisplayRight>
            </ImageSub>
            <ArticleHead>{renderHTML(postDetails.title.rendered)}</ArticleHead>
            <UnderLine />
            <ArticleBody>
              {renderHTML(postDetails.content.rendered)}
            </ArticleBody>
          </Content>
        )}
        <Background></Background>
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
`;
const Content = styled.div`
  padding-bottom: 40px;
  @media (min-width: 1200px) {
    width: 752px;
    margin: auto;
  }
  @media only screen and (max-width: 1199.9px) and (min-width: 769px) {
    width: 752px;
    margin: auto;
  }
  @media only screen and (max-width: 768.9px) and (min-width: 576px) {
    padding-left: 15px;
    padding-right: 15px;
    width: 85%;
    margin: auto;
  }
  @media (max-width: 575.9px) {
    width: 95%;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  ${"" /* img:first-child{
    width:100%;
  } */}
`;
const ImageHead = styled.img`
  width: 100%;
`;
const ImageSub = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;
const DisplayLeft = styled.div`
  display: flex;

  p:first-child {
    padding-right: 20px;
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 0px;
  }
  p:last-child {
    font-weight: 300;
    font-size: 12px;
    margin-bottom: 0px;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  font-size: 24px;
  padding-right: 10px;
  vertical-align: middle;
  margin-top: -3px;
`;
const DisplayRight = styled.div`
  display: flex;
  margin-left: auto;
`;
const CeoBtn = styled.div`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  font-size: 12px;
  font-weight: 700;
  padding: 0px 12px;
  margin-right: 11px;
  @media (max-width: 576px) {
    display: none;
  }
`;
const EventsBtn = styled.div`
  color: black;
  border: 1px solid black;
  background-color: transparent;
  font-size: 12px;
  font-weight: 700;
  padding: 0px 12px;
  @media (max-width: 576px) {
    display: none;
  }
`;
const ArticleHead = styled.h3`
  font-weight: bold;
  font-size: 35px;
  line-height: 48px;
  font-style: normal;
  padding-top: 20px;

  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const UnderLine = styled.hr`
  width: 307px;
  margin-top: 40px;
  margin-bottom: 40px;
  border-top: 5px solid #3cc5d1;
  color: #3cc5d1;
  background-color: #3cc5d1;
  margin-left: 0px;
  text-align: left;
`;
const ArticleBody = styled.div`
  font-size: 16px;
  line-height: 28px;
  font-style: normal;
  font-weight: normal;
  width: 100%;
  img {
    width: 100%;
    height: 100% !important;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
const Background = styled.div`
  background: url(${BackgroundImage});
  height: 600px;
  background-size: cover;
`;
