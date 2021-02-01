import React from 'react';
import styled from 'styled-components';
import icon from "../../assets/icon-black.png";

export default function Divider() {
    return (
        <React.Fragment>
        <Wrapper>
            <Line/>
            <img src={icon} alt="Nodomaru Icon"/>
            <Line/>
        </Wrapper>
        </React.Fragment>
    )
}

const Wrapper = styled.div `
width:699px;
display:flex;
justify-content:space-around;
align-items:center;
margin:auto;
padding-top:15px;
padding-bottom:15px;
img{
    width:35px;
}
@media(max-width:768px){
    width:85%;
}
@media(max-width:425px){
    padding-top:10px;
    ${'' /* padding-bottom:10px; */}
}
`
const Line = styled.hr `
border:1px solid black;
width:300px;
@media(max-width:768px){
    width:200px;
}
@media(max-width:576px){
    width:150px;
}
@media(max-width:425px){
    width:120px;
}
`