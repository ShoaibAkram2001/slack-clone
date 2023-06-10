import React from 'react';
import Button from "@mui/material/Button"
import styled from "styled-components";
import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import {auth, provider } from "../firebase";

function Login() {

  const SignIn=(e)=>{

    e.preventDefault();

    signInWithPopup(auth, provider);
  }

  return (
    
    <LoginContainer>
    
    <LoginInnerContainer>
      < img src='data:image/png;base64,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' alt="not Found" />
      <h1>Sign in to the Twitter</h1>
      <p>Twitter.slack.com</p>

      <Button onClick={SignIn}>Sign in with Google</Button>
     </LoginInnerContainer>

    </LoginContainer>
  )
}

export default Login;


const LoginContainer=styled.div`

position:absolute;
height:450px;
width:500px;
background-color:white;
box-shadow: 0 1px 3px rgba(0,0,0,12),0 1px 2px rgba(0,0,0,0.24);
top:12rem;
left:15rem;
`;

const LoginInnerContainer=styled.div`
   position:absolute;
   left:25%;
   >img{
   height:100px;
   margin:40px 0px 30px 80px;
   
   }

   >h1{
   margin-right:30px;
   margin-left:-30px;
   }
   >p{
  margin:1rem 0rem 3rem 5rem;
   }
   >button{
    background-color:green;
   color:white;
   margin-left:3rem;
   text-transform:capitalize;
   

   :hover{
    background-color:green;
    color:white;
   }
   }
   
`;
