import { useState } from 'react';
import { CalcTool } from './CalcTool';

export default function CalcToolContainer() {
  const [result, setResult] = useState(0);

  const add = (operand) =>
    setResult((currentResult) => currentResult + operand);
  const subtract = (operand) =>
    setResult((currentResult) => currentResult - operand);

  return <CalcTool result={result} onAdd={add} onSubtract={subtract} />;
}
