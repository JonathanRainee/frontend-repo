import axiosInstance from "./axiosInstance";

export interface UserData {
  email: string;
  password: string;
  age: string;
  name: string;
}

export interface LoginData{
  email: string;
  password: string;
}

interface ApiResponse {
  message: string;
}

export const signUpUser = async (userData: UserData): Promise<ApiResponse> => {
  const response = await axiosInstance.post<ApiResponse>("/api/users/sign-up", userData);
  return response.data;
};

export const signInUser = async (loginData: LoginData): Promise<ApiResponse> => {
  const response = await axiosInstance.post<ApiResponse>("/api/users/sign-in", loginData);
  return response.data;
}
