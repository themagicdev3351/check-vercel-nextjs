import { clearStudent, fetchStudentProfile } from '@/features/student/studentSlice';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [authState, setAuthState] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            const role = localStorage.getItem("role");

            const isAuthenticated = token && token.trim() !== "" && token !== null;

            if (userId && token && isAuthenticated) {
                dispatch(fetchStudentProfile(userId));
            }

            setAuthState({
                isAuthenticated: isAuthenticated,
                token: token,
                userId: userId,
                role: role,
            });
        }
    }, [dispatch]);

    const logout = () => {
        localStorage.removeItem("token");
        // localStorage.removeItem("userId");
        localStorage.removeItem("role");

        dispatch(clearStudent());
        setAuthState({
            isAuthenticated: false,
            token: null,
            // userId: null,
            role: null,
        });

        if (typeof window !== "undefined") {
            window.location.reload();
        }
    };

    const setRole = (role) => {
        localStorage.setItem("role", role);
        setAuthState((prevState) => ({
            ...prevState,
            role: role,
        }));
    };

    const setToken = (token) => {
        localStorage.setItem("token", token);
        setAuthState((prevState) => ({
            ...prevState,
            isAuthenticated: true,
            token: token,
        }));
    };

    const setUserId = (userId) => {
        localStorage.setItem("userId", userId);
        setAuthState((prevState) => ({
            ...prevState,
            isAuthenticated: true,
            userId: userId,
        }));
    };

    return (
        <AuthContext.Provider value={{ authState, setToken, setUserId, setRole, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
