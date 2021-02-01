import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import renderHTML from "react-render-html";


export default function HomePost(props) {
  const currentPosts = { props };
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
     
        <Container>
          
          <Card>
          
          <PostCard to={`/news/${currentPosts.props.post.id}`}>
            <NewsWrapper>
              <New className="col-xl-2 col-lg-2 col-md-2 col-2">New</New>
              <NewsPostHeading className="col-xl-10 col-lg-10 col-md-10 col-10">
              {truncate(renderHTML(currentPosts.props.post.title.rendered))}
              HELLO HELLO 
              </NewsPostHeading>
              </NewsWrapper>
            
            </PostCard>
            </Card>
          
          
        </Container>
        
        
      
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
    @media(max-width:1199px){
      width:80%;
      
    }
    @media(max-width:576px){
      width:80%;
      ${'' /* height:40px; */}
      font-weight: bold;
      margin-top:36px;
font-size: 14px;
margin-bottom:17px!important;
    }

`
const PostCard = styled(Link)`
  height:60px;
  width:950px;
    :hover{
      text-decoration:none;
    }
    @media(max-width:576px){
      width:300px;
      height:40px;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      margin:auto;
      
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
@media(max-width:1199px){
  line-height:40px;
}
@media(max-width:991px){
  font-size:18px;
  line-height:30px;
}
@media(max-width:576px){
  font-size:14px;
  line-height:20px;
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
  @media(max-width:576px){
    text-align:left;
  font-size:14px;
}
`;

