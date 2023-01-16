import { forwardRef, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div>
        <label>
          {label}
          <input ref={ref} className="input" type="text" {...props} />
        </label>
      </div>
    );
  }
);
