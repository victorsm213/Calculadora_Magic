
export function calculateExpression(expression: string): number {
  // Remove any potential dangerous code
  if (!/^[0-9+\-*/().]+$/.test(expression)) {
    throw new Error("Invalid expression");
  }

  try {
    // Use Function constructor for calculation
    // This is safe because we've already validated the input above
    // eslint-disable-next-line no-new-func
    return new Function(`return ${expression}`)();
  } catch (error) {
    console.error("Calculation error:", error);
    throw new Error("Calculation error");
  }
}
