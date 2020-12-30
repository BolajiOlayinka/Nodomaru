import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Footer() {
    const copyDate = new Date().getFullYear();
    return (
        <Wrapper>
            <Container>
            <FooterContent>
                <Copyright>
                株式会社Nodomaru, Copyright &copy; {copyDate}
                </Copyright>
                <FooterRight>
                    <FooterLinks to="/">
                    お問い合わせ
                    </FooterLinks>
                    <FooterLinks to="/">
                    個人情報保護方針
                    </FooterLinks>
                    <FooterLinks to ="/">
                    規約と条件
                    </FooterLinks>
                </FooterRight>
            </FooterContent>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div `
background-color:var(--deepBlue);
height:60px;
`
const Container = styled.div `
@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
`
const Copyright = styled.div `
color:white;
font-size: 18px;
line-height: 21px;

`
const FooterContent = styled.div `
display:flex;
align-items:center;
height:60px;
`
const FooterRight = styled.div `
margin-left:auto;
`
const FooterLinks = styled(Link) `
font-size: 18px;
line-height: 25px;
color:white;
padding-left:64px;
:hover{
    text-decoration:none;
    volor:var(--lightBlue);
}
`
