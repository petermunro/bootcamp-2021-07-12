// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAddAction, createSubtractAction } from '../../calcActions';
import { CalcTool } from './CalcTool';

export default function CalcToolContainer() {
  // const [result, setResult] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  const add = (operand) =>
    // setResult((currentResult) => currentResult + operand);
    dispatch(createAddAction(operand));

  const subtract = (operand) =>
    // setResult((currentResult) => currentResult - operand);
    dispatch(createSubtractAction(operand));

  return <CalcTool result={result} onAdd={add} onSubtract={subtract} />;
}
