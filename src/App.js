import React from "react";
import { app } from "./features/appSlice";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Components/Login";
function App()
{
  const [user,loading]=useAuthState(auth);

  return (

    <div className="App">
      
      {!user? (<Login />):
      (
    <AppContainer>

         <Header />   
        <AppBody>
         <Sidebar /> 
        <Chat />
         </AppBody>
      </AppContainer>
      )
    }
      </div>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;


const AppBody =styled.div`

display:flex;
flex-direction:row;
 flex:0.8;
 height:100%;
 background-color:white;

`
