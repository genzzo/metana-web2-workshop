"use client";

import Input from "$/lib/components/Input";
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
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="relative isolate overflow-hidden rounded-pill">
        <div className="absolute -left-full -z-10 h-full w-[300%] bg-base-gradient" />
        <button className="h-14 w-full text-center text-xl text-background">
          Login
        </button>
      </div>
    </form>
  );
}
