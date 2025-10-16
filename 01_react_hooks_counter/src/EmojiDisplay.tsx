import React from "react";

// Props型定義
interface EmojiDisplayProps {
  currentEmoji: string;
}

// React.FC<Props型>ではなく、関数引数に直接型を適用
const EmojiDisplay = ({ currentEmoji }: EmojiDisplayProps) => {
  return <div className="emoji">{currentEmoji}</div>;
};

export default EmojiDisplay;
