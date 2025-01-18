import axios from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for class name merging
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Axios instance configuration
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://app.xpertbuddy.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the Authorization header
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Allow HTTP requests in development mode only
if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}
