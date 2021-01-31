import React from 'react';
import Loader from '../assets/loader.gif';
import styled from 'styled-components';

export default function Spinner() {
    return (
        <Wrapper>
            <img src={Loader} alt="Loader" style={{width:"60px", margin:"auto"}} />
        </Wrapper>
    )
}

const Wrapper =styled.div `
display:flex;
align-items: center;
justify-content: center;
width:10%;
height:15em;
margin:auto;
text-align:center;
`