"use client";

import { useState } from "react";
import { signUpUser, UserData } from "../../apis/userApi";
import CustomTextField from "../atoms/CustomTextField";
import CustomButton from "../atoms/CustomButton";
import ErrorText from "../atoms/ErrorText";
import AuthPrompt from "./AuthPromot";
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password do not match.");
      return;
    }

    const userData: UserData = { email, password, age, name };

    try {
      const response = await signUpUser(userData);
      setSuccess(response.message);
      setError("");
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during sign-up.");
    }

    console.log({ email, password });
    setError("");
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
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <CustomTextField
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
      />      
      <CustomTextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <CustomTextField
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
      />
      {error && <ErrorText message={error} />}
      <AuthPrompt promptText="Already Have An Account?" linkText="Login Here!" linkHref="/"/>
      <CustomButton type="submit">Register</CustomButton>
    </form>
  );
}
