import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hour: 0,
  minute: 0,
  second: 0,
  name:"Mori Vazife",
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    setClock : (state,action)=> (
        {...state,
          hour :action.payload.hour,
          minute: action.payload.minute,
          second: action.payload.second
        }),
    setName : (state,action)=> ({...state,image :action.payload}),
  },
});

const clockAction = clockSlice.actions;
const clockReducer = clockSlice.reducer;
export { clockAction, clockReducer };
