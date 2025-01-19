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
      return response.data;
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
        `/auth/generateOtp?mobileNumber=${data.mobile}&countryCode=${data.countryCode}&loginSignUp=${data.loginMethod}`
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
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default authSlice.reducer;
