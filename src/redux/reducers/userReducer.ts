import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { afterMailCode } from "redux/ajax/auth/mailcode";

export interface UserState {
  login: boolean;
  userInfo: {
    email: string;
    nickname: string;
    profileImg: string;
  };
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    userInfo: {
      email: "",
      nickname: "",
      profileImg: "",
    },
  },
  reducers: { test() {} },
  extraReducers: (builder) => {
    afterMailCode(builder);
  },
});

export const { test } = userSlice.actions;

export default userSlice.reducer;
