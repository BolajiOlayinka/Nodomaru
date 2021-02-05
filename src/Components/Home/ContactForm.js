import React,{Component} from "react";
import styled from "styled-components";
import axios from 'axios';
import {FormGroup} from 'reactstrap'; 


export default class ContactForm extends Component {
  constructor(value){
    super()
    this.state = {
      name:"",
      companyname:"",
      email:"",
      confirmemail:"",
      phonenumber:"",
      message:"",
      isSubmitted:false,
      error:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitContact = this.submitContact.bind(this);
  }
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  resetForm = () => {
    const form = {
      name:"",
      companyname:"",
      email:"",
      emailaddress: "",
      confirmemail:"",
      message: "",
      phonenumber:""
    };

    this.setState(form);
  };

  
  submitContact=(e)=> {
    e.preventDefault();
   
    const { name, companyname, email, confirmemail, phonenumber,message} = this.state;
    const formData = new FormData();
    formData.append("your-name", name);
    formData.append("your-company", companyname);
    formData.append("your-email", email);
    formData.append("your-confirmemail", confirmemail);
    formData.append("your-phonenumber", phonenumber);
    formData.append("your-message", message);
    console.log(this.state);
    axios.post("https://ndmr.co.jp/blog/index.php?rest_route=/contact-form-7/v1/contact-forms/39/feedback",formData)
    .then(res=>{
      this.setState({
        isSubmitted:true,
        error:false,
      })
      console.log(res)
      if(res.data.status==="mail_sent"){
        this.resetForm()
      }
    }).catch(err=>{
          this.setState({
            error:true,
            isSubmitted:false
      })
      console.log(err)
        });
  }
  
  render(){
    
    const { name, companyname, email, confirmemail, phonenumber,message} = this.state;
    return (
      <React.Fragment>
        <Wrapper>
          <StyledForm onSubmit={this.submitContact}>
          <StyledFormGroup>
          <StyledLabel htmlFor="name">お名前*</StyledLabel>
          <StyledInput type="text" placeholder="お名前*" required name="name" id="name" value={name} onChange={this.handleChange("name")}/> <br/>
          </StyledFormGroup>
            
            <StyledFormGroup>
            <StyledLabel htmlFor="business name">貴社名</StyledLabel>
            <StyledInput type="text" placeholder="貴社名" name="name" id="bname" value={companyname} onChange={this.handleChange("companyname")}/> <br/>
            </StyledFormGroup>

            <StyledFormGroup>
            <StyledLabel htmlFor="email">メールアドレス*</StyledLabel>
            <StyledInput type="email" placeholder="メールアドレス*" required name="email" id="email" value={email} onChange={this.handleChange("email")}/> <br/>
            </StyledFormGroup>
           
            <StyledFormGroup>
            <StyledLabel htmlFor="confirm email">メールアドレス(確認用)*	</StyledLabel>
            <StyledInput type="email" placeholder="メールアドレス(確認用)*" name="cfemail" id="cfemail" value={confirmemail} onChange={this.handleChange("confirmemail")}/><br/>
            </StyledFormGroup>

            <StyledFormGroup>
            <StyledLabel htmlFor="phone number">電話番号*	</StyledLabel>
            <StyledInput type="number" placeholder="電話番号*	" name="phonenumber" id="phonenumber" value={phonenumber} onChange={this.handleChange("phonenumber")}/><br/>
            </StyledFormGroup>

            <StyledFormGroup>
            <StyledLabel htmlFor="name">お問い合わせ内容	</StyledLabel>
            <StyledTextArea type="text" placeholder="お問い合わせ内容" required name="-ve-your-subject" id="m-ve-your-subject" value={message} onChange={this.handleChange("message")}/>
            </StyledFormGroup>

           
            
            
            <Required>*必須項目に入力してください</Required>
            <Submit type="submit" value="送信"/>
          </StyledForm>
          {this.state.isSubmitted && <SuccessMessage>FORM SUBMITTED SUCCESSFULLY</SuccessMessage>}
          {this.state.error && <ErrorMessage>FORM NOT SUBMITTED</ErrorMessage>}
        </Wrapper>
      </React.Fragment>
    );
  }
 
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
const StyledFormGroup = styled(FormGroup) `
margin-bottom:0px!important;
`
const StyledForm = styled.form`
text-align:center;
`;
const StyledLabel = styled.label`
text-align:left!important;
margin-right:auto!important;
width:90%;
display:none;
@media(min-width:768px){
  display:none;
}
`
const StyledInput = styled.input`
 width: 778px;
 height:47px;
 margin-bottom:22px;
 border-radius:4px;
 border: 0.5px solid #000000;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
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
 ::placeholder {
  color: #c4c4c4;
  padding-left:25px;
  padding-top:15px;
}
@media(max-width:576px){
  ::placeholder {
  color: #c4c4c4;
  padding-left:15px;
  padding-top:15px;
}
}
`;
const StyledTextArea = styled.textarea `
 width: 778px;
 height:150px;
 outline:0;
 border-radius:4px;
 border: 0.5px solid #000000;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
 @media(max-width:991px){
    width:90%;
    margin:auto;
  }
 
}

::placeholder {
  color: #c4c4c4;
  padding-left:25px;
  padding-top:15px;
}
@media(max-width:576px){
  ::placeholder {
  color: #c4c4c4;
  padding-left:15px;
  padding-top:15px;
}
}
`
const Required = styled.div `
font-size: 10px;
line-height: 24px;
color:black;
text-align:left;
height:26px;
@media(max-width:991px){
  width:90%;
  margin:auto;
  
}
`
const Submit = styled.input `
background-color:var(--lightBlue);
${'' /* padding:9px 25px 9px 25px; */}
color:white;
width:86px;
height:40px;
border-color:transparent;
outline:0;
border-radius:4px;
:hover{
    color:black;
}
`

const SuccessMessage = styled.div `
color:green;
font-size:16px;
margin-bottom:0px;
`

const ErrorMessage = styled.div `
color:red;
font-size:16px;
margin-bottom:0px;
`