import React from "react";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import DayJS from "react-dayjs";
// import Spinner from '../Spinner';
export default function Post(props) {
  const currentPosts = { props };
  // console.log(currentPosts) 
  return (
    <React.Fragment>
      <StyledLink to={`news/${currentPosts.props.post.id}`}>
        <Container>
          <Row>
            <Col lg="3" md="3" sm="3" xs="3">
              <LeftImg>
                <img
                  src={
                    currentPosts.props.post["_embedded"]["wp:featuredmedia"][
                      "0"
                    ]["source_url"]
                  }
                  alt="Post Thumbnail"
                />
              </LeftImg>
            </Col>
            <Col lg="9" md="9" sm="9" xs="9">
              <RightSection>
                <RightSectionHead>
                  <Date>
                    <p>
                      <StyledFontAwesome icon={faCalendarWeek} />

                      <DayJS format="YYYY-MM-DD">
                        {currentPosts.props.post.date}
                      </DayJS>
                    </p>
                  </Date>
                  <Team>
                    <p>
                      <StyledFontAwesome icon={faUserCircle} />
                      {
                        currentPosts.props.post["_embedded"]["author"]["0"][
                          "name"
                        ]
                      }
                    </p>
                  </Team>
                  {/* <Btn>
                    {
                      currentPosts.props.post["_embedded"]["wp:term"]["1"]["0"][
                        "name"
                      ]
                    }
                  </Btn> */}
                  {/* <Btn>
                    {
                      currentPosts.props.post["_embedded"]["wp:term"]["0"]["0"][
                        "name"
                      ]
                    }
                  </Btn> */}
                </RightSectionHead>
                <PostTitle>
                  {renderHTML(currentPosts.props.post.title.rendered)}
                </PostTitle>
                <PostExcerpt>
                  {renderHTML(currentPosts.props.post.excerpt.rendered)}
                </PostExcerpt>
              </RightSection>
            </Col>
          </Row>
        </Container>
      </StyledLink>
    </React.Fragment>
  );
}
const StyledLink = styled(Link)`
  color: black;
  :hover {
    text-decoration: none;
  }
`;
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;

  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
const Date = styled.div`
  display: flex;
`;
const Team = styled.div`
  padding-left: 11px;
  padding-right: 11px;
`;
const LeftImg = styled.div`
  text-align: center;
  img {
    width: 150px;
  }
  @media (max-width: 768px) {
    img {
      width: 70%;
      text-align: left;
    }
  }
  @media (max-width: 576px) {
    img {
      width: 100%;
      text-align: left;
    }
  }
`;
const RightSectionHead = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0px;
    font-size: 12px;
  }
  @media (max-width: 576px) {
    div:nth-last-child(1) {
      display: none;
    }
    div:nth-last-child(2) {
      display: none;
    }
  }
  @media (max-width: 425px) {
    p {
      font-size: 10px;
    }
  }
`;
const RightSection = styled.div``;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  font-size: 24px;
  padding-right: 10px;
  vertical-align: middle;
  margin-top: -3px;
`;
// const Btn = styled.div`
//   color: white;
//   background-color: #f8951d;
//   font-size: 12px;
//   padding: 0px 10px;
//   border-radius: 4px;
//   margin-right: 11px;
// `;
const PostTitle = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  @media only screen and (max-width: 768px) and (min-width: 576px) {
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }
  @media (max-width: 575.9px) {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
`;
const PostExcerpt = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
`;
