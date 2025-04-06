
import React from "react";

interface CalculatorDisplayProps {
  displayValue: string;
  expression: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ 
  displayValue, 
  expression 
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-gray-400 text-right h-6 mb-1 overflow-hidden">
        {expression}
      </div>
      <div className="text-white text-right text-3xl font-medium truncate">
        {displayValue}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
