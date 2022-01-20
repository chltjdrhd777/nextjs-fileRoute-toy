import { UserState } from "redux/reducers/userReducer";
import axios from "redux/ajax/axios";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { changeToString } from "utils/changeToString";

//! access token / refresh token
export interface DataProps {
  email: string;
  password: string | number;
  nickname: string;
}

export const signup = createAsyncThunk("auth/signup", async (data: DataProps, options) => {
  try {
    const response = await axios.post("/auth/signup", changeToString(data));

    return {
      data: response.data,
    };
  } catch (err: any) {
    return options.rejectWithValue(err.response);
  }
});

export const afterSignUp = (builder: ActionReducerMapBuilder<UserState>) => {
  builder.addCase(signup.fulfilled, (state, action) => {
    console.log("success", action.payload);
  });
};
