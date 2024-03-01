"use client";

import Input from "$/lib/components/Input";
import PasswordInput from "$/lib/components/PasswordInput";
import { validateEmail, validatePassword } from "$/lib/utils/validators";
import { useCallback, useState } from "react";

async function login(email: string, password: string) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("An error occurred");
  }
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string>();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string>();
  const [hasSubmit, setHasSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = useCallback(async (email: string, password: string) => {
    setIsSubmitting(true);
    try {
      await login(email, password);
      alert("Welcome!");
    } catch (error) {
      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setHasSubmit(true);

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    setEmailError(emailErrorMessage);
    setPasswordError(passwordErrorMessage);
    if (emailErrorMessage || passwordErrorMessage) return;

    handleLogin(email, password);
  };

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      <Input
        label="Email"
        placeholder="Enter your email"
        error={hasSubmit ? emailError : undefined}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        error={hasSubmit ? passwordError : undefined}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isSubmitting}
      />

      <div
        className={`group relative isolate overflow-hidden rounded-pill ${isSubmitting && "opacity-60"}`}
      >
        <div className="absolute -left-full -z-10 h-full w-[300%] bg-base-gradient transition-all duration-300 group-focus-within:left-0 group-hover:left-0" />
        <button
          type="submit"
          className="h-14 w-full text-center text-xl text-background"
          disabled={isSubmitting}
          aria-label="Login"
        >
          Login
        </button>
      </div>
    </form>
  );
}
