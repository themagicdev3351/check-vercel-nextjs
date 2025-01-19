import { axiosInstance } from "@/lib/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const generatePayload = (data) => ({
  availableAnyTime: data.availableAnyTime || true,
  availableAnyTimeSlot: data.availableAnyTimeSlot || true,
  availableDays: data.availableDays || ["string"],
  availableTimeSlots: data.availableTimeSlots || ["string"],
  budgetMax: data.budgetMax || 0,
  budgetMin: data.budgetMin || 0,
  countryCode: data.countryCode || "string",
  currencyCode: data.currencyCode || "string",
  currencyName: data.currencyName || "string",
  displayName: data.displayName || "string",
  email: data.email || "string",
  firstName: data.firstName || "string",
  hearAboutUs: data.hearAboutUs || ["string"],
  helpNeeded: data.helpNeeded || ["string"],
  interestedSubjects: data.interestedSubjects || ["string"],
  lastName: data.lastName || "string",
  levelOfStudy: data.levelOfStudy || "string",
  lookingForRequirement: data.lookingForRequirement || "string",
  mobileNumber: data.mobileNumber || "string",
  onlyNativeSpeaker: data.onlyNativeSpeaker || true,
  tutorCountries: data.tutorCountries || ["string"],
  universityName: data.universityName || "string",
  userId: data.userId || "string",
  yearOfStudy: data.yearOfStudy || "string",
});

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data: any, { rejectWithValue }) => {
    try {
      const payload = generatePayload(data);

      const response = await axiosInstance.post(
        `/profile/onboard/student?userId=${data.userId}`,
        payload
      );

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/profile/get/student?userId=${userId}`,
        {
          headers: {
            accept: "*/*",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user profile"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
