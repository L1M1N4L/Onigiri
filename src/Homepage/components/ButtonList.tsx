import React from "react";
import Button from "./Button";
import { Menu } from "lucide-react";

interface ButtonListProps {
  SignUpText: string;
  setLoginText?: string;
  SignupAction: () => void;
  LoginAction?: () => void;
}

const ButtonList: React.FC<ButtonListProps> = ({
  SignUpText,
  setLoginText,
  SignupAction,
  LoginAction = () => {},
}) => {
  return (
    <div className="flex items-center gap-4">
      {setLoginText && (
        <Button onClick={LoginAction} variant="secondary">
          {setLoginText}
        </Button>
      )}
      <Button onClick={SignupAction} variant="primary">
        {SignUpText}
      </Button>
      <Button variant="icon" className="block md:hidden">
        <Menu className="w-6 h-6 text-[#14274E]" />
      </Button>
    </div>
  );
};

export default ButtonList;
