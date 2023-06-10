import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

function SidebarOptions({ Icon, Title, AddChannelOption, id }) {
  const dispatch = useDispatch();
  const AddChannel = () => {
    const ChannelName = prompt("Please enter channel name:");

    const data = {
      name: ChannelName,
    };

    if (ChannelName) {
      const docRef = doc(collection(db, "rooms"));
      setDoc(docRef, data);
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomid: id,
        })
      );
    }
  };
  return (
    <SidebarOptionsContainer
      onClick={AddChannelOption ? AddChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" />}

      {Icon ? (
        <p>{Title}</p>
      ) : (
        <SidebarOptionChannels>
          <span>#</span>
          <p>{Title}</p>
        </SidebarOptionChannels>
      )}
    </SidebarOptionsContainer>
  );
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
  color: white;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  border-bottom: 1px solid #49274b;

  padding-top: 5px;
  padding-bottom: 5px;

  :hover {
    opacity: 0.8;
    background-color: #340e36;
    cursor: pointer;
  }

  > p {
    font-size: 1.2rem;
    cursor: pointer;
    text-align: right;
  }
  > .MuiSvgIcon-root {
    padding: 5px;
    cursor: pointer;
  }
`;

const SidebarOptionChannels = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  font-size: 1.2rem;
  > p {
    text-align: right;
  }
  > span {
    padding: 5px;
  }
`;
