import React from "react";
import Button from "./Button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

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
  const handleSignup = () => {
    SignupAction();
  };

  const handleLogin = () => {
    LoginAction();
  };

  return (
    <div className="flex items-center gap-4">
      {setLoginText && (
        <Link to="/login" onClick={handleLogin}>
          <Button variant="secondary">
            {setLoginText}
          </Button>
        </Link>
      )}
      <Link to="/signup" onClick={handleSignup}>
        <Button variant="primary">
          {SignUpText}
        </Button>
      </Link>
      <Button variant="icon" className="block md:hidden">
        <Menu className="w-6 h-6 text-[#14274E]" />
      </Button>
    </div>
  );
};

export default ButtonList;
