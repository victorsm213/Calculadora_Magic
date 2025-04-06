
import React from "react";
import { Button } from "@/components/ui/button";

interface ScientificKeypadProps {
  onFunctionClick: (func: string) => void;
}

const ScientificKeypad: React.FC<ScientificKeypadProps> = ({
  onFunctionClick,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("sin")}
      >
        sin
      </Button>
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("cos")}
      >
        cos
      </Button>
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("tan")}
      >
        tan
      </Button>

      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("sqrt")}
      >
        √
      </Button>
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("square")}
      >
        x²
      </Button>
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("log")}
      >
        log
      </Button>

      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("ln")}
      >
        ln
      </Button>
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("pi")}
      >
        π
      </Button>
      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100"
        onClick={() => onFunctionClick("e")}
      >
        e
      </Button>

      <Button
        variant="outline"
        className="bg-purple-50 hover:bg-purple-100 col-span-3"
        onClick={() => onFunctionClick("random")}
      >
        Random
      </Button>
    </div>
  );
};

export default ScientificKeypad;
