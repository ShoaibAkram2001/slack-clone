import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { auth, db } from "../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import firestore from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ChannelName,Channelid})
 {
 const [user]=useAuthState(auth);
  const [msg,setMessage]=useState("");

  const MessageObj={
    message:msg,
    user:user?.displayName,
    userImg:user?.photoURL,
    timestamp: serverTimestamp(),
  }

  const sendMesage = (e) => {

    e.preventDefault();
    if(!Channelid)
    {
      return false;
    }

    const messageRef = doc(collection(db, "rooms", Channelid, "Messages"));
    setDoc(messageRef, MessageObj);  

    //console.log(messageRef);

    

       setMessage("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input type="text" value={msg} onChange={(e)=>{setMessage(e.target.value)}}   placeholder={`Message & #${ChannelName}`}/>
        <Button hidden  type="submit" onClick={sendMesage}>
          SEND 
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
flex:0.1;
 border:1px solid gray;
 border-radius:10px;
 margin-left:100px;
 width:80%;
 background-color:whitesmoke;
 margin-bottom:50px;
 
 >form
 {
    width:100%;
    display :flex;
    padding:25px;
    justify-content:space-between;

 >input{
    outline:none;
    border:none;
    width:70%;
    background-color:transparent;
    font-size:1.1rem;
   
   
 }
 >.MuiButtonBase-root{
  padding-right:30px;
  display:none;
   }

 } 
 

`;
