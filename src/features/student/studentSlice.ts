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
  "student/updateProfile",
  async (data: any, { rejectWithValue }) => {
    try {
      const payload = generatePayload(data);

      const response = await axiosInstance.post(
        `/profile/onboard/student?userId=${data.userId}`,
        payload
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const referralCode = createAsyncThunk(
  "student/referralCode",
  async (data: any, { rejectWithValue }) => {
    try {
      const payload = generatePayload(data);

      const response = await axiosInstance.put(
        `/profile/redeem/referral-code?userId=${data.userId}&referralCode=${data.referralCode}`,
        payload
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const fetchStudentProfile = createAsyncThunk(
  "student/fetchStudentProfile",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/profile/get/student?userId=${userId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch user profile"
      );
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearStudent: (state) => {
      state.student = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudentProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.student = action.payload;
      })
      .addCase(fetchStudentProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearStudent } = studentSlice.actions;
export default studentSlice.reducer;
