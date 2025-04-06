
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { calculateExpression } from "@/lib/calculatorUtils";
import { cn } from "@/lib/utils";
import CalculatorDisplay from "./CalculatorDisplay";
import SimpleKeypad from "./SimpleKeypad";
import ScientificKeypad from "./ScientificKeypad";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [expression, setExpression] = useState("");
  const [isScientific, setIsScientific] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  // Clear display when switching modes
  useEffect(() => {
    clearAll();
  }, [isScientific]);

  const appendToDisplay = (value: string) => {
    if (displayValue === "0" && value !== ".") {
      setDisplayValue(value);
    } else if (displayValue === "Error") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleOperator = (operator: string) => {
    try {
      if (displayValue !== "Error") {
        setExpression(expression + displayValue + operator);
        setDisplayValue("0");
      }
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const calculateResult = () => {
    try {
      const fullExpression = expression + displayValue;
      const result = calculateExpression(fullExpression);
      setHistory([...history, `${fullExpression} = ${result}`]);
      setExpression("");
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const clearAll = () => {
    setDisplayValue("0");
    setExpression("");
  };

  const clearEntry = () => {
    setDisplayValue("0");
  };

  const handleBackspace = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue("0");
    }
  };

  const handleSpecialFunction = (func: string) => {
    try {
      let result;
      const num = parseFloat(displayValue);

      switch (func) {
        case "sqrt":
          result = Math.sqrt(num);
          break;
        case "square":
          result = num * num;
          break;
        case "sin":
          result = Math.sin(num);
          break;
        case "cos":
          result = Math.cos(num);
          break;
        case "tan":
          result = Math.tan(num);
          break;
        case "log":
          result = Math.log10(num);
          break;
        case "ln":
          result = Math.log(num);
          break;
        case "pi":
          result = Math.PI;
          break;
        case "e":
          result = Math.E;
          break;
        case "percent":
          result = num / 100;
          break;
        default:
          result = num;
      }

      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 mb-4",
        isScientific ? "w-full max-w-2xl" : "w-full max-w-md"
      )}>
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium text-white">
              {isScientific ? "Scientific Calculator" : "Standard Calculator"}
            </h2>
            <div className="flex items-center gap-2">
              <Switch
                id="calculator-mode"
                checked={isScientific}
                onCheckedChange={setIsScientific}
              />
              <Label htmlFor="calculator-mode" className="text-white text-sm">
                Scientific
              </Label>
            </div>
          </div>
          
          <CalculatorDisplay 
            displayValue={displayValue} 
            expression={expression} 
          />
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-1 mb-4">
            {history.slice(-3).map((item, index) => (
              <div key={index} className="w-full text-right text-sm text-gray-500 truncate">
                {item}
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <SimpleKeypad
                onDigitClick={appendToDisplay}
                onOperatorClick={handleOperator}
                onEqualsClick={calculateResult}
                onClearClick={clearAll}
                onClearEntryClick={clearEntry}
                onBackspaceClick={handleBackspace}
                onSpecialFunctionClick={handleSpecialFunction}
              />
            </div>

            {isScientific && (
              <div className="flex-1">
                <ScientificKeypad 
                  onFunctionClick={handleSpecialFunction} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
