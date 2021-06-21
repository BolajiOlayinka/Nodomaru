import React from 'react';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';

export default function Footer() {
    const copyDate = new Date().getFullYear();
    return (
        <Wrapper>
            <Container>
            <FooterContent>
                <Copyright>
                株式会社Nodomaru, Copyright &copy; {copyDate}
                </Copyright>
                {/* <FooterRight>
                    <FooterLinks to="/">
                    お問い合わせ
                    </FooterLinks>
                    <FooterLinks to="/">
                    個人情報保護方針
                    </FooterLinks>
                    <FooterLinks to ="/">
                    規約と条件
                    </FooterLinks>
                </FooterRight> */}
            </FooterContent>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div `
background-color:var(--deepBlue);
height:60px;
@media(max-width:576px){
    height:105px;
}
@media(max-width:425px){
    height:105px;
   
}
`
const Container = styled.div `
width:95%;
margin:auto;
@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
@media(max-width:768px){
    width:100%;
    padding-left:15px;
    padding-right:15px;
}

`
const Copyright = styled.div `
color:white;
font-size: 18px;
line-height: 21px;
@media(max-width:991px){
    font-size:16px;
    
}
@media(max-width:768px){
    font-size:12px;
    
}
@media(max-width:576px){
    font-size:17px;
   line-height:21px;
}
@media(max-width:360px){
    font-size:16px;
}
`
const FooterContent = styled.div `
display:flex;
align-items:center;
height:60px;
@media(min-width:1200px){
    padding-left:45px;
    padding-right:45px;
}
@media (min-width: 1024px) and (max-width: 1199px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 768px) and (max-width: 1023.9px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 767.9px) {
    padding-left: 20px;
    padding-right: 20px;
  }
@media(max-width:576px){
    flex-direction:column;
    justify-content:center;
    height:105px;
}
@media(max-width:425px){
    height:105px;

}
`
// const FooterRight = styled.div `
// margin-left:auto;
// @media(max-width:576px){
//     margin-left:0px;
// }
// @media(max-width:576px){
   
//    padding-top:15px;
// }
// `
// const FooterLinks = styled(Link) `
// font-size: 18px;
// line-height: 25px;
// color:white;
// padding-left:64px;
// :hover{
//     text-decoration:none;
//     color:black;
// }
// @media(max-width:991px){
//     font-size:14px;
//     padding-left:40px;
// }
// @media(max-width:768px){
//     font-size:12px;
//     padding-left:20px;
    
// }
// @media(max-width:576px){
//     font-size:18px;
//    line-height:21px;
// }
// @media(max-width:576px){
//     font-size:14px;
//     padding-left:10px;
//    :first-child{
//        padding-left:0px;
//    }
// }
// @media(max-width:360px){
//     font-size:16px;
// }

// `
