import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import DayJS from "react-dayjs";
import Featured from "../../assets/Featured.jpg";
// import Spinner from '../Spinner';
export default function Post(props) {
  const currentPosts = { props };
  const media = currentPosts.props.post["_embedded"]["wp:featuredmedia"];
  return (
    <React.Fragment>
     <StyledLink to={`news/${currentPosts.props.post.id}`}>
        <Container>
          <Row>
            <LeftSection>
              <LeftImg>
                {media === undefined || !media ? (
                  <img src={Featured} alt="Post Thumbnail" />
                ) : (
                  <img src={media[0]["source_url"]} alt="Post Thumbnail" />
                )}
              </LeftImg>
            </LeftSection>

            <RightSection>
              <PostTitle>
                {renderHTML(currentPosts.props.post.title.rendered)}
              </PostTitle>
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

                {/* {(currentPosts.props.post["_embedded"]["wp:term"][1]===undefined || (currentPosts.props.post["_embedded"]["wp:term"][1]).length===0) ? (
                   <Btn>PR Team</Btn>
                ):(<Btn>{currentPosts.props.post["_embedded"]["wp:term"]["1"]["0"]["name"]}</Btn>)} */}

                {/* <Btn>
                    {
                      currentPosts.props.post["_embedded"]["wp:term"]["0"]["0"][
                        "name"
                      ]
                    }
                  </Btn> */}
              </RightSectionHead>
              <PostExcerpt>
                {renderHTML(currentPosts.props.post.excerpt.rendered)}
              </PostExcerpt>
            </RightSection>
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
const Row = styled.div`
  display: flex;
  height: 300px;
  margin-bottom: 60px;
  @media (max-width: 767.9px) {
    flex-direction: column;
    height: 530px;
  }
  @media (max-width: 426px) {
    height: 430px;
  }
`;
const Container = styled.div`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  @media (max-width: 767.9px) {
    width: 400px;
    margin: auto;
  }
  @media (max-width: 425px) {
    width: 95%;
    margin: auto;
  }
`;
const Date = styled.div`
  display: flex;
`;
const Team = styled.div`
  padding-left: 11px;
  padding-right: 11px;
`;
const LeftImg = styled.div`
width:400px;
overflow:hidden;
  img {
   
    height: 300px;
    overflow: hidden;
    text-align: center;
  }

  @media (max-width: 576px) {
width:100%;
overflow:hidden;
    img {
      width:100%;
      text-align: left;
    }
  }
  @media (max-width: 426px) {
    img {
      width:100%;
      height: 200px;
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
const LeftSection = styled.div`
  width: 400px;
  margin-right: 37px;

  @media (max-width: 426px) {
    width: 100%;
  }
`;
const RightSection = styled.div`
  width: 316px;
  @media (max-width: 767.9px) {
    width: 400px;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  font-size: 24px;
  padding-right: 10px;
  vertical-align: middle;
  margin-top: -3px;
`;
// const Btn = styled.div`
//   color: black;
//   background-color: transparent;
//   outline:0;
//   font-size: 12px;
//   margin-right: 11px;
// `;
const PostTitle = styled.h3`
  font-weight: bold;
  font-size: 35px;
  line-height: 48px;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  @media only screen and (max-width: 768px) and (min-width: 576px) {
    padding-top: 10px;
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
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  @media (max-width: 767.9px) {
    flex-direction: column;
    line-height: 24px;
  }
`;
