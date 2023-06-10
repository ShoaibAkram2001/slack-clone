import React, { useEffect } from "react";
import ChatInput from "./ChatInput";
import styled from "styled-components";
import ChatMessage from "./ChatMessage";
import { useRef } from "react";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import { selectRoomid } from "../features/appSlice";
import { db } from "../firebase";

import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
function Chat() {
  const roomid = useSelector(selectRoomid);

  
const chatRef=useRef(null);
  const [roomDetails] = useDocument(roomid && doc(db, "rooms", roomid));

  const [roomMessages, loading, errors] = useCollection(
    collection(db, `rooms/${roomid}`, "Messages"),
  );

  useEffect(() => {

    chatRef?.current?.scrollIntoView({behavior:"smooth"},);

  }, [roomid,loading])
 
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatHeaderLeft>
          <h3> # {roomDetails?.data()?.name}</h3>
          <StarBorderIcon />
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <InfoIcon />
          <p>Details</p>
        </ChatHeaderRight>
      </ChatHeader>

      {roomMessages?.docs.map((doc) => {
        const { message, timestamp, user, userImg } = doc.data();

        return (
          <ChatMessage
            Message={message}
            Timestamp={timestamp}
            user={user}
            userImg={userImg}
          />
        );
      })}

      <ChatBottom  ref={chatRef}/>

      <ChatInput ChannelName={roomDetails?.data()?.name} Channelid={roomid} />
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  height: 100vh;
 
`;

const ChatHeader = styled.div`
  display: flex;
  width: 100%;
  flex: 0.1;
  border-bottom: 1px solid lightgray;
  padding:20px;
  
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;

  align-items: center;
  > .MuiSvgIcon-root {
    margin-right: 80px;
  }
`;

const ChatBottom = styled.div`
  
  width: 100%;
  padding-bottom:100px;

`;

const ChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-left: 80px;
  align-items: center;

  > p {
    font-size: 20px;
  }
`;
