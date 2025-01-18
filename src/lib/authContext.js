import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        token: null,
        userId: null,
        role: null,
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            const role = localStorage.getItem("role");

            const isAuthenticated = token && token.trim() !== "" && token !== null;

            setAuthState((prevState) => ({
                ...prevState,
                isAuthenticated,
                token,
                userId,
                role,
            }));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");

        setAuthState({
            isAuthenticated: false,
            token: null,
            userId: null,
            role: null,
        });
    };

    const setRole = (role) => {
        localStorage.setItem("role", role);
        setAuthState((prevState) => ({
            ...prevState,
            role,
        }));
    };

    const setToken = (token) => {
        localStorage.setItem("token", token);
        setAuthState((prevState) => ({
            ...prevState,
            isAuthenticated: true,
            token,
        }));
    };

    const setUserId = (userId) => {
        localStorage.setItem("userId", userId);
        setAuthState((prevState) => ({
            ...prevState,
            isAuthenticated: true,
            userId,
        }));
    };

    return (
        <AuthContext.Provider value={{ authState, setToken, setUserId, setRole, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
