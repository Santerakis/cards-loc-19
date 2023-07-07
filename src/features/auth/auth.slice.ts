import { createSlice } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authApi,
  ProfileType,
} from "features/auth/auth.api";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
  },
});

// объект с неперезаписываемыми (readonly) полями, но не рекомендуется
// для избегания magic number-ов
enum ResultCode {
    Success = 0,
    Error = 1,
    Captcha = 10,
}

// то же, но лучне так
export const ResultCode2 = {
    success: 0,
    error: 1,
    captcha: 10
} as const

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "auth/login",
  async (arg, thunkAPI) => {
    return thunkTryCatch(
      thunkAPI,
      async () => {
        const res = await authApi.login(arg);
        return { profile: res.data };
      },
      false
    );
  }
);

const register = createAppAsyncThunk<void, ArgRegisterType>(
  "auth/register",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      await authApi.register(arg);
    });
  }
);

export const authReducer = slice.reducer;
export const authThunks = { register, login };
