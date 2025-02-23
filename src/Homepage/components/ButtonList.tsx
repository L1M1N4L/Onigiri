import React from "react";
import Button from "./Button";
import { Menu } from "lucide-react";

interface ButtonListProps {
  primaryText: string;
  setLogin?: string;
  primaryAction: () => void;
  secondaryAction?: () => void;
}

const ButtonList: React.FC<ButtonListProps> = ({
  primaryText,
  setLogin,
  primaryAction,
  secondaryAction = () => {},
}) => {
  return (
    <div className="flex items-center gap-4">
      {setLogin && (
        <Button onClick={secondaryAction} variant="secondary">
          {setLogin}
        </Button>
      )}
      <Button onClick={primaryAction} variant="primary">
        {primaryText}
      </Button>
      <Button variant="icon" className="block md:hidden">
        <Menu className="w-6 h-6 text-[#14274E]" />
      </Button>
    </div>
  );
};

export default ButtonList;
