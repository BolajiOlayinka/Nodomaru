import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { AppConsumer } from "../../Context";
import styled from "styled-components";
import Spinner from "../Spinner";
import renderHTML from "react-render-html";
import Featured from "../../assets/Featured.jpg";

export default function Carousel(props) {
  const image = [];
  const header = [];
  const truncate = (str, length, ending) => {
    if (length == null) {
      length = 30;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  return (
    <React.Fragment>
      <AppConsumer>
        {(value) => {
          const { AllPost } = value;

          if (AllPost === undefined || AllPost.length === 0) {
            return <Spinner />;
          } else {
            AllPost.AllPost.slice(0, 3).map((carouselImage) => {
              if ((carouselImage["_embedded"]["wp:featuredmedia"]) === undefined || !(carouselImage["_embedded"]["wp:featuredmedia"] )){
                  return (
                    image.push(Featured)
                  )
              }else{
              return (
                image.push(
                  carouselImage["_embedded"]["wp:featuredmedia"]["0"][
                    "source_url"
                  ]
                ),
                header.push(carouselImage["title"]["rendered"])
              );
            }});
          }

          const items = [
            {
              src: image[0],
              altText: "slide1",
              captionText: "Hello",
              header: truncate(renderHTML(header[0])),
              key: "1",
              caption: "Slide 1",
            },
            {
              src: image[1],
              altText: "slide2",
              captionText: "Hello",
              header: truncate(renderHTML(header[1])),
              key: "2",
              caption: "Slide 2",
            },
            {
              src: image[2],
              altText: "slide3",
              captionText: "Hello",
              header: truncate(renderHTML(header[2])),
              key: "3",
              caption: "Slide 3",
            },
          ];
          return (
            <React.Fragment>
              <Wrapper>
                <UncontrolledCarousel items={items} />
              </Wrapper>
            </React.Fragment>
          );
        }}
      </AppConsumer>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  .carousel-inner {
    z-index: 0;
  }
  .carousel-item {
    z-index: 0;
    height: 400px !important;
  }
  .carousel-item .active {
    z-index: 0;
    height: 400px !important;
  }
  .carousel-indicators {
    top: 430px;
    z-index: 2 !important;
    @media (max-width: 576px) {
      top: 320px;
    }
    @media (max-width: 426px) {
      top: 215px;
    }
  }
  .carousel-indicators li {
    width: 10px !important;
    height: 10px !important;
    border-radius: 50%;
    border-style: none;
    border: 1px solid black;
    background: transparent;
  }
  .carousel-indicators li.active {
    background-color: black;
  }
  .carousel-caption {
    left: 43px !important;
  }
  .carousel-caption h3 {
    font-size: 38px;
    line-height: 46px;
    height: 100px;
    width: 586px;
    font-weight: 700;
    margin-right: auto;
    text-align: left;
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: 43px;
  }
  .carousel-caption p {
    display: none;
  }
  .carousel-control-next-icon {
    display: none;
  }
  .carousel-control-prev-icon {
    display: none;
  }
  @media (min-width: 1200px) {
    .carousel-item img {
      ${'' /* height: 400px;
      overflow: hidden; */}
    }
  }
  @media (max-width: 1199px) {
    .carousel-item {
      height: 400px !important;
    }
    .carousel-item img {
      height: 300px;
      overflow: hidden;
    }
  }
  @media (max-width: 426px) {
    .carousel-item {
      height: 200px !important;
    }
    .carousel-item img {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
  }
`;
