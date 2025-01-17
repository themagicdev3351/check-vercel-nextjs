export const checkAuth = () => {
    // Ensure that we're in a browser environment (window is available)
    if (typeof window === "undefined") {
        return { isAuthenticated: false, token: null, userId: null, role: null };
    }

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    const isAuthenticated = token && token.trim() !== "" ? true : false;

    return { isAuthenticated, token, userId, role };
};

export const storeAuthData = ({ token, userId, role }) => {
    // Ensure that we're in a browser environment (window is available)
    if (typeof window === "undefined") {
        return;
    }

    if (token && token.trim() !== "") {
        localStorage.setItem("token", token);
    }
    if (userId && userId.trim() !== "") {
        localStorage.setItem("userId", userId);
    }

    if (role && role.trim() !== "") {
        localStorage.setItem("role", role);
    }
};

export const logoutUser = () => { 
    if (typeof window === "undefined") {
        return;
    }

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
};
