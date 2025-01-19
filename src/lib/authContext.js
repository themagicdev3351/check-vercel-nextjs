import { clearUser, fetchUserProfile } from '@/features/user/userSlice';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [authState, setAuthState] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            const role = localStorage.getItem("role");

            const isAuthenticated = token && token.trim() !== "" && token !== null;
            if (userId && token) {
                dispatch(fetchUserProfile(userId));
            }
            setAuthState((prevState) => ({
                ...prevState,
                isAuthenticated: isAuthenticated,
                token: token,
                userId: userId,
                role: role,
            }));
        }
    }, []);

    // useEffect(() => {
    //     if (authState.isAuthenticated) {
    //         if (!authState.role) {
    //             router.push("/select-role");
    //         } else if (authState.isAuthenticated) {
    //             router.push("/");
    //         }
    //     }
    // }, [authState, router]);

    const logout = () => {
        localStorage.removeItem("token");
        // localStorage.removeItem("userId");
        localStorage.removeItem("role");
        dispatch(clearUser());
        setAuthState({
            isAuthenticated: false,
            token: null,
            // userId: null,
            role: null,
        });
        router.push("/signin");
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
