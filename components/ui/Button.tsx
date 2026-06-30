import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}