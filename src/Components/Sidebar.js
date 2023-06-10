import React from "react";
import styled from "styled-components";
import "../index.css";
import SidebarOptions from "../Components/SidebarOptions";
import { useCollection } from "react-firebase-hooks/firestore";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";

import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { auth, db } from "../firebase";
import { collection, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels, loading, errors] = useCollection(collection(db, "rooms"));
  const [user]=useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarHeaderLeft>
          <h2>PAPA FAM HOO</h2>
          <SidebarHeaderdisc>
            <FiberManualRecordIcon />
            <p>{user?.displayName}</p>
          </SidebarHeaderdisc>
        </SidebarHeaderLeft>
        <SidebarHeaderRight>
          <CreateIcon />
        </SidebarHeaderRight>
      </SidebarHeader>

      <SidebarOptions Icon={InsertCommentIcon} Title="Threads" />
      <SidebarOptions Icon={InboxIcon} Title="Mentions & ractions" />
      <SidebarOptions Icon={DraftsIcon} Title="Saved items" />
      <SidebarOptions Icon={BookmarkIcon} Title="Channel browser" />

      <SidebarOptions Icon={PeopleAltIcon} Title="People & user groups" />
      <SidebarOptions Icon={AppsIcon} Title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} Title="File browser" />
      <SidebarOptions Icon={ExpandLessIcon} Title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} Title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} Title="Add Channel" AddChannelOption />

      

       {channels?.docs.map((doc) => {
        console.log(doc.data()?.name);
       return <SidebarOptions key={doc.id} id={doc.id} Title={doc.data()?.name} />;
      })}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 0.2;
  z-index: 999;
  border-top: 1px solid #49274b;
  position:sticky;

  > hr {
    border: 1px solid #49274b;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #49274b;
`;

const SidebarHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    color: whitesmoke;
  }
`;

const SidebarHeaderdisc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  > p {
    color: whitesmoke;
    margin-right: 20px;
    cursor: pointer;
  }

  > .MuiSvgIcon-root {
    color: gray;
    margin-right: 10px;
  }
`;

const SidebarHeaderRight = styled.div`
  margin-right: 20px;
  > .MuiSvgIcon-root {
    color: white;
    cursor: pointer;
  }
`;
