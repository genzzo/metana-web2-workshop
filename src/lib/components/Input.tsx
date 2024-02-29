import { ComponentProps, forwardRef, useId } from "react";

type Props = ComponentProps<"input"> & {
  label: string;
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, ...rest } = props;

  return (
    <div className="group">
      <p className="text-foreground/70 mb-2">{label}</p>
      <input
        ref={ref}
        {...rest}
        className="w-full outline-none text-lg border-b-2 border-b-foreground/30"
      />
    </div>
  );
});

export default Input;
