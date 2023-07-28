import { createSlice , PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  token: string | null
  id : string | null,
  name: string | null,
  email: string | null,
  photoURL: string | null,
  accesLevel: string | null,
  companyId: string | null,
}

const initialState: UserState = {
  token: null,
  id: null,
  email: null,
  name: null,
  photoURL: null,
  accesLevel: null,
  companyId: null,
  
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUserData: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearUserData: (state) => {
      state.token = null;
      state.id = null;
      state.email = null;
      state.name = null;
      state.photoURL = null;
      state.accesLevel = null;
      state.companyId = null;
    },
  },
});

export const { storeUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
  