import React from "react";
import styled from "styled-components";

export default function ContactForm() {
  return (
    <React.Fragment>
      <Wrapper>
        <StyledForm>
          <StyledInput type="text" value="" label="Input One"/> <br/>
          <StyledInput type="text" value="" label="Input Two"/> <br/>
          <StyledInput type="text" value="" label="Input Three"/> <br/>
          <StyledInput type="text" value="" label="Input Four"/><br/>
          <StyledTextArea type="text" value="" label="Input Five"/>
          <Submit type="submit" value="Submit"/>
        </StyledForm>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  width: 778px;
  margin: auto;
  padding-bottom:131px;
  @media(max-width:991px){
    width:80%;
    margin:auto;
  }
`;
const StyledForm = styled.form`
text-align:center;
`;
const StyledInput = styled.input`
 width: 778px;
 height:47px;
 margin-bottom:22px;
 @media(max-width:991px){
    width:90%;
    margin:auto;
    margin-bottom:22px;
  }
 :active{
     border:1px solid black;
     outline:0;
 }
 :focus{
    border:1px solid black;
     outline:0;
 }
`;
const StyledTextArea = styled.textarea `
 width: 778px;
 height:150px;
 @media(max-width:991px){
    width:90%;
    margin:auto;
  }
`
const Submit = styled.input `
background-color:var(--lightBlue);
padding:9px 25px 9px 25px;
color:white;
width:181px;
height:40px;
border-color:transparent;
outline:0;
:hover{
    color:black;
}
`