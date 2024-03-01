"use client";

import { type ComponentProps, forwardRef, useState } from "react";
import EyeIcon from "../icons/EyeIcon";

type Props = Omit<ComponentProps<"input">, "type"> & {
  label: string;
  error?: string;
};

const PasswordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, error, ...rest } = props;

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const type = isVisible ? "text" : "password";

  return (
    <div className="group relative">
      <p className="mb-2 text-foreground/70">{label}</p>
      <input
        ref={ref}
        {...rest}
        type={type}
        className="w-full pr-12 text-lg outline-none"
      />

      <button
        type="button"
        className="absolute right-1"
        onClick={toggleVisibility}
      >
        <EyeIcon showLine={!isVisible} />
      </button>
      <div className="relative h-0.5 w-full overflow-hidden rounded-lg bg-foreground/30 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-foreground/50 after:transition-transform after:duration-300 disabled:opacity-60 group-focus-within:after:scale-x-100" />
      {!!error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
