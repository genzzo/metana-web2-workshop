import { type ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, error, ...rest } = props;

  return (
    <div className="group">
      <p className="mb-2 text-foreground/70">{label}</p>
      <input ref={ref} {...rest} className="w-full text-lg outline-none" />
      <div className="relative h-0.5 w-full overflow-hidden rounded-lg bg-foreground/30 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-foreground/50 after:transition-transform after:duration-300 disabled:opacity-60 group-focus-within:after:scale-x-100" />
      {!!error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
