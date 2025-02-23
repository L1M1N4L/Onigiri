import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "", onClick, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg transition duration-200";
  const variantStyles =
    variant === "primary"
      ? "text-[#ECE7E2] bg-[#14274E] hover:bg-[#14274E]/90"
      : variant === "secondary"
      ? "text-[#14274E] hover:text-[#14274E]/80"
      : "p-2";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
