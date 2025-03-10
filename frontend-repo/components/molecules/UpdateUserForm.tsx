"use client";

import { useState } from "react";
import { signUpUser, UserData } from "../../apis/userApi";
import CustomTextField from "../atoms/CustomTextField";
import CustomButton from "../atoms/CustomButton";
import ErrorText from "../atoms/ErrorText";
import AuthPrompt from "./AuthPromot";
import { useRouter } from 'next/navigation';

export default function UpdateUserForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email ) {
      setError("Please fill all the fields");
      return;
    }


    // try {
    //   const response = await signUpUser(userData);
    //   setSuccess(response.message);
    //   setError("");
    //   router.push('/');
    // } catch (err: any) {
    //   setError(err.response?.data?.message || "An error occurred during sign-up.");
    // }

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
      {error && <ErrorText message={error} />}

      <CustomButton type="button">Fetch</CustomButton>
      <CustomButton type="submit">Update</CustomButton>
    </form>
  );
}
