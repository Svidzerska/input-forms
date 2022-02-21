import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   icon: "",
}

export const iconSlice = createSlice({
   name: 'icon',
   initialState,
   reducers: {
      setIcon: (state, action) => {
         console.log(action);
         state.iconImage = action.payload
      },
   },
},
)

export const { setIcon } = iconSlice.actions;
export default iconSlice.reducer;

