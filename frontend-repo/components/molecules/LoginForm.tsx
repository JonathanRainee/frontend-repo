"use client";

import { useState } from "react";
import CustomTextField from "../atoms/CustomTextField";
import CustomButton from "../atoms/CustomButton";
import ErrorText from "../atoms/ErrorText";
import AuthPrompt from "./AuthPromot";
import { useRouter } from 'next/navigation';
import { signInUser, LoginData } from "@/apis/userApi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const loginData: LoginData = {email, password};

    try {
      const response = await signInUser(loginData);
      console.log(response)
      if(response != null){
        console.log("test: ",response)
        setSuccess(response.message);
        setError("");
        router.push('/home')
      }else{
        setError("Invalid credentials!")
        console.log("gaad: ", response)
        return;
      }
    } catch (error) {
      
    }
    
    console.log({ email, password });
    setError("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomTextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <CustomTextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {error && <ErrorText message={error} />}
      <AuthPrompt promptText="Don't Have An Account?" linkText="Register Here!" linkHref="/register"/>
      <CustomButton type="submit">Login</CustomButton>
    </form>
  );
}
