import React from "react";

// Props型定義を必須にする
interface CounterButtonProps {
  onClick: () => void;
  title: string;
}

// React.FC<CounterButtonProps>ではなく、関数引数に直接型を適用
const CounterButton = ({ onClick, title }: CounterButtonProps) => {
  return <button onClick={onClick}>{title}</button>;
};

export default CounterButton;
