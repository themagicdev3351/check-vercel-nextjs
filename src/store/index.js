import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import studentReducer from '@/features/student/studentSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        student: studentReducer,
    },
});

export default store;
