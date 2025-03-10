import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:2323", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
