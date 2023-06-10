import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  roomid:null,
  MessageId:null,
 
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
 
  reducers: {
    enterRoom:(state,action)=>{
      state.roomid=action.payload.roomid;
    },
    enterMessage:(state,action)=>{
      state.MessageId=action.payload
    }
    ,
  },
  
  
});

export const {enterRoom } = appSlice.actions;
export const selectRoomid=(state)=>state.app.roomid;
export const selectChannelMessageId=(state)=>state.app.MessageId;
export default appSlice.reducer;
