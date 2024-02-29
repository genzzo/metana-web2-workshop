import { type ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, ...rest } = props;

  return (
    <div className="group">
      <p className="mb-2 text-foreground/70">{label}</p>
      <input
        ref={ref}
        {...rest}
        className="w-full border-b-2 border-b-foreground/30 text-lg outline-none"
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
