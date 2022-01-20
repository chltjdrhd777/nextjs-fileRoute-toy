import { UserState } from "redux/reducers/userReducer";
import axios from "redux/ajax/axios";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";

//! access token / refresh token
export interface DataProps {
  email: string;
  code: string;
}

export const mailcode: any = createAsyncThunk("auth/mailcode", async (data: DataProps, options) => {
  try {
    const response = await axios.post("auth/mailcode", data);

    return {
      data: response.data,
    };
  } catch (err: any) {
    return options.rejectWithValue(err.response);
  }
});

export const afterMailCode = (builder: ActionReducerMapBuilder<UserState>) => {
  builder.addCase(mailcode.fulfilled, (state, action) => {
    // state.login = true;
    // state.userInfo = action.payload
    console.log(action.payload, "from redux reducer");
  });
};
