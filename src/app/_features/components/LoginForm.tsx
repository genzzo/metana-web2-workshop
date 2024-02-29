"use client";

import Input from "$/lib/components/Input";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      <Input label="Email" placeholder="Enter your email" />
      <Input
        label="Password"
        placeholder="Enter your password"
        type="password"
      />

      <div className="relative isolate overflow-hidden rounded-pill">
        <div className="w-[300%] h-full bg-base-gradient absolute -left-full -z-10" />
        <button className="w-full h-14 text-center text-background text-xl">
          Login
        </button>
      </div>
    </form>
  );
}
