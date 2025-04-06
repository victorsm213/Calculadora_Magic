
import React from "react";
import { Button } from "@/components/ui/button";
import { Backspace, Divide, Minus, Plus, X } from "lucide-react";

interface SimpleKeypadProps {
  onDigitClick: (digit: string) => void;
  onOperatorClick: (operator: string) => void;
  onEqualsClick: () => void;
  onClearClick: () => void;
  onClearEntryClick: () => void;
  onBackspaceClick: () => void;
  onSpecialFunctionClick: (func: string) => void;
}

const SimpleKeypad: React.FC<SimpleKeypadProps> = ({
  onDigitClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  onClearEntryClick,
  onBackspaceClick,
  onSpecialFunctionClick,
}) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button
        variant="outline"
        className="bg-red-50 hover:bg-red-100 text-red-500"
        onClick={onClearClick}
      >
        C
      </Button>
      <Button
        variant="outline"
        className="bg-red-50 hover:bg-red-100 text-red-500"
        onClick={onClearEntryClick}
      >
        CE
      </Button>
      <Button
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100"
        onClick={() => onSpecialFunctionClick("percent")}
      >
        %
      </Button>
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={onBackspaceClick}
      >
        <Backspace className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        onClick={() => onDigitClick("7")}
      >
        7
      </Button>
      <Button
        variant="outline"
        onClick={() => onDigitClick("8")}
      >
        8
      </Button>
      <Button
        variant="outline"
        onClick={() => onDigitClick("9")}
      >
        9
      </Button>
      <Button
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100"
        onClick={() => onOperatorClick("/")}
      >
        <Divide className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        onClick={() => onDigitClick("4")}
      >
        4
      </Button>
      <Button
        variant="outline"
        onClick={() => onDigitClick("5")}
      >
        5
      </Button>
      <Button
        variant="outline"
        onClick={() => onDigitClick("6")}
      >
        6
      </Button>
      <Button
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100"
        onClick={() => onOperatorClick("*")}
      >
        <X className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        onClick={() => onDigitClick("1")}
      >
        1
      </Button>
      <Button
        variant="outline"
        onClick={() => onDigitClick("2")}
      >
        2
      </Button>
      <Button
        variant="outline"
        onClick={() => onDigitClick("3")}
      >
        3
      </Button>
      <Button
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100"
        onClick={() => onOperatorClick("-")}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        onClick={() => onDigitClick("0")}
      >
        0
      </Button>
      <Button
        variant="outline"
        onClick={() => onDigitClick(".")}
      >
        .
      </Button>
      <Button
        variant="outline"
        className="bg-blue-50 hover:bg-blue-100"
        onClick={() => onOperatorClick("+")}
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        variant="default"
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
        onClick={onEqualsClick}
      >
        =
      </Button>
    </div>
  );
};

export default SimpleKeypad;
