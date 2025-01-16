import { axiosInstance } from "@/lib/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const generatePayload = (data) => ({
  countryCode: data.countryCode || "string",
  displayName: data.displayName || "string",
  email: data.email || "string",
  externalUid: data.externalUid || "string",
  firstName: data.firstName || "string",
  lastName: data.lastName || "string",
  loginMethod: data.loginMethod || "CUSTOM_EMAIL_PASSWORD",
  mobile: data.mobile || "string",
  otp: data.otp || "string",
  password: data.password || "string",
  photoURL: data.photoURL || "string",
  role: data.role || "ADMIN",
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: any, { rejectWithValue }) => {
    try {
      const payload = generatePayload(data);

      const response = await axiosInstance.post(
        `/auth/login?loginMethod=${data.loginMethod}`,
        payload
      );

      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Login error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: any, { rejectWithValue }) => {
    try {
      const payload = generatePayload(data);

      const response = await axiosInstance.post(
        `/auth/signup?loginMethod=${data.loginMethod}`,
        payload
      );
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Register error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const generateOtpMobile = createAsyncThunk(
  "auth/generateOtp",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/auth/generateOtp?mobileNumber=${data.number}&countryCode=${data.countryCode}&loginSignUp=SIGNUP`
      );
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Register error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const verifyMobileOtp = createAsyncThunk(
  "auth/verifyMobileOtp",
  async (data: any, { rejectWithValue }) => {
    const payload = generatePayload(data);
    try {
      const response = await axiosInstance.post(
        `/auth/forgotPassword/otp/validate?method=MOBILE`,
        payload
      );
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Register error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

const isClient = typeof window !== "undefined";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: isClient && localStorage.getItem("token") ? true : false,
    token: isClient ? localStorage.getItem("token") : null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.login = false;
      if (isClient) {
        localStorage.removeItem("token");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Login user
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.login = true;
        if (isClient) {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Register user
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.login = true;
        if (isClient) {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
