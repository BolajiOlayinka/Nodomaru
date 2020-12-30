import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import ImgOne from '../../assets/PostImgOne.png';
// import ImgTwo from '../../assets/PostImgTwo.png';
// import ImgThree from '../../assets/PostImgThree.png';
// import renderHTML from "react-render-html";
// import { Col } from "reactstrap";

export default function HomePost(props) {
  // const currentPosts = { props };
  // const truncate = (str, length, ending) => {
  //   if (length == null) {
  //     length = 30;
  //   }
  //   if (ending == null) {
  //     ending = "...";
  //   }
  //   if (str.length > length) {
  //     return str.substring(0, length - ending.length) + ending;
  //   } else {
  //     return str;
  //   }
  // };
  // console.log(currentPosts.props.post)
  return (
    <React.Fragment>
     
        <Container>
          
          <Card>
          <PostCard to="/">
          
            <NewsWrapper>
              <New className="col-xl-2 col-lg-2 col-md-2">New</New>
              <NewsPostHeading className="col-xl-10 col-lg-10 col-md-10">
              Nodomaru, Inc. announces new partnership with local...
              </NewsPostHeading>
              </NewsWrapper>
            
            </PostCard>
            </Card>
          
         
          
          <Card>
          <PostCard to="/">
            
            <NewsWrapper>
              <New className="col-xl-2 col-lg-2 col-md-2">New</New>
              <NewsPostHeading className="col-xl-10 col-lg-10 col-md-10">
              Update to Nodomaru, Inc. Website and Blog Channel
              </NewsPostHeading>
              </NewsWrapper>
           
            </PostCard>
            </Card>
          

          
          <Card>
          <PostCard to="/">
            
            <NewsWrapper>
              <New className="col-xl-2 col-lg-2 col-md-2">New</New>
              <NewsPostHeading className="col-xl-10 col-lg-10 col-md-10">
              NHK Product Feature - “New Business in Post-COVID Economy”
              </NewsPostHeading>
              </NewsWrapper>
            
            </PostCard>
            </Card>
          
          
        </Container>
        <ReadMoreButton>Read More Posts</ReadMoreButton>
        
      
    </React.Fragment>
  );
}

const NewsWrapper = styled.div`
display:flex;
align-items:center;
height:60px;

}
  
`;
const Card =styled.div `
 width: 950px;
 height:60px;
 margin:auto;
 border: 1px solid black;
 margin-bottom:12px;
 :hover{
    background:black;
   color:white;
   text-decoration:none;
    }

`
const PostCard = styled(Link)`
  height:60px;
  width:950px;
    :hover{
      text-decoration:none;
    }
` 

const Container = styled.div`
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;

const NewsPostHeading = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bold;
  line-height:60px;
  
:hover{
  color:white;
  text-decoration:none;
}
`;

const New = styled.div`
  color: var(--lightBlue);
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  text-align:center;
  margin:auto;
  :hover{
    text-decoration:none;
  }
`;

const ReadMoreButton = styled(Link) `
width: 500px;
height: 60px;
color:var(--lightBlue);
display:flex;
align-items:center;
text-align:center;
background-color:white;
margin-top:12px;
margin:auto;
justify-content:center;
font-weight: bold;
font-size: 20px;
line-height: 28px;
font-family: 'Open Sans', sans-serif;
`