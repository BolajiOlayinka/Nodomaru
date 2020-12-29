import React from 'react';
import styled from 'styled-components';
import BannerImage from '../../assets/BannerImg.png';
import WhiteLogo from '../../assets/LogoWhite.png';
import PalmTree from '../../assets/PalmTree.png';

export default function Home() {
    
    return (
        <React.Fragment>
            <Banner>
            <Container>
            <LogoContainer>
                    <img src={WhiteLogo} alt="Nodomaru Logo"/>
                    <LogoSubText>事業を通じてのどまる社会を創る</LogoSubText>
                    <LogoButton href="/" target='_blank' referrer="noreferrer">詳しく</LogoButton>
                </LogoContainer> 
                <PalmContainer>
                <img src={PalmTree} alt="Nodomaru PalmTree"/>
                </PalmContainer>
                
            </Container>
               
            </Banner>
            <Service>

                </Service>

        </React.Fragment>
    )
}
const Container = styled.div `
@media(min-width:1200px){
width:1200px;
margin:auto;
}

`

const Banner = styled.div `
background: url(${BannerImage});
background-size:cover;
background-repeat:no-repeat;
height:592px;
display:flex;
align-items:center;
text-align:center;
border:5px solid white;
`
const LogoContainer = styled.div `

img{
    width:700px;
}
`
const LogoSubText = styled.div `
width: 583px;
height: 69px;
font-weight: normal;
font-size: 36px;
line-height: 49px;
text-align:center;
margin:auto;
color:white;
margin-bottom:39px;
`
const LogoButton = styled.a `
width:104px;
height:30px;
padding:9px 25px 9px 25px;
background-color:var(--mainYellow);
color:white;
text-decoration:none;

`
const PalmContainer = styled.div `
position:absolute;
text-align:right;
top:0;
margin-top:296px;

margin-right:126px;
img{
    height:728px;
    width:320px;
    ${'' /* margin-left:auto; */}
    
}
@media(min-width:1200px){
    width:1200px;
   
    
}
`
const Service = styled.div `
background-color:var(--lightBlue);
height:400px;
border-top-width:0px!important;
border:5px solid white;

`
