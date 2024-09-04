import { createSlice } from '@reduxjs/toolkit';

const initialState = {
//   value: 0,
lat:"",
long:"",
confirmCases:"",
confirmNonCases:"",
confirmDeaths:"",
};

const latlongSlice = createSlice({
  name: 'latlong',
  initialState,
  reducers: {
    lat: (state,action) => {
      state.lat = action.payload;
    },
    long: (state,action) => {
      state.long = action.payload;
    },
    confirmCases: (state,action) => {
        state.confirmCases = action.payload;
      },
    confirmNonCases:(state,action)=>{
      state.confirmNonCases = action.payload;
    },
    confirmDeaths: (state,action) => {
        state.confirmDeaths = action.payload;
      },
  },
});

export const { lat, long ,confirmCases, confirmDeaths,confirmNonCases} = latlongSlice.actions;
export default latlongSlice.reducer;
