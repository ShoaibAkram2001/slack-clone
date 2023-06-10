import React from 'react';
import styled from "styled-components";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import { auth } from '../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import "../index.css";
import SidebarOptions from './SidebarOptions';

function Header() 
{

  const [user,loading]=useAuthState(auth);


  return (
   <HeaderContainer>
    <HeaderLeft>
      <HeaderAvatar 
      onClick={()=>auth.signOut()}
      src={user?.photoURL}
      alt={user?.displayName}
      />
      <AccessTimeIcon/>
    </HeaderLeft>
    <HeaderMiddle>
    <SearchIcon />
    <input type={"text"} placeholder={"Search Channel"} />
    </HeaderMiddle>
    <HeaderRight>
     <HelpIcon />
    </HeaderRight>


   </HeaderContainer>
  );
}

export default Header;


const HeaderContainer =styled.div`

 background-color: var(--slack-color);
 display:flex;
 align-items:center;
 justify-content:space-between;
 flex:0.2;
 width:100%;
 padding:20px;


`
const HeaderLeft =styled.div`

display:flex;
align-items:center;
justify-content:space-between;
flex:0.2;

>.MuiAvatar-root{
  background-color:blue;
}
>.MuiSvgIcon-root{
  color:white;
  :hover{
    cursor:pointer;
   
  }
}
`
const HeaderMiddle =styled.div`

display:flex;
align-items:center;
flex:0.6;
background-color:transparent;
border:1px solid gray;
border-radius:10px;
padding:8px;
margin-left:20px;

>input{
outline:none;
border:none;
background-color:transparent;
font-size:1rem;
margin-left:20px;
width:100%;
color:white;
}

>.MuiSvgIcon-root{
  color:gray;
}

`
const HeaderRight =styled.div `
 display:flex;
 flex:0.2;
 justify-content:flex-end;
margin-right:20px;
>.MuiSvgIcon-root
{
  color:white;
  :hover{
    cursor:pointer;
   
  }
}
`

const HeaderAvatar =styled(Avatar)`
 cursor: pointer;
 opacity:0.8;
`;