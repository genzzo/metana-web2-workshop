"use client";

import Input from "$/lib/components/Input";
import PasswordInput from "$/lib/components/PasswordInput";
import { useState } from "react";

async function login(email: string, password: string) {
  await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      <Input
        label="Email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="group relative isolate overflow-hidden rounded-pill">
        <div className="absolute -left-full -z-10 h-full w-[300%] bg-base-gradient transition-all duration-300 group-focus-within:left-0 group-hover:left-0" />
        <button
          type="submit"
          className="h-14 w-full text-center text-xl text-background"
        >
          Login
        </button>
      </div>
    </form>
  );
}
