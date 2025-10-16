// ReactのuseStateフックをインポート（状態管理に使用）
import React, { useState } from "react";

// 子コンポーネントをインポート
import EmojiDisplay from "./EmojiDisplay.tsx";
import CounterButton from "./CounterButton.tsx";

// スタイルシートをインポート
import "./CounterExample.css";

// Appコンポーネントの定義
const CounterExample = () => {
  // useStateとTypeScriptの型定義
  const [count, setCount] = useState<number>(0);

  const emojis: string[] = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
  ];
  const currentEmoji: string = emojis[count % emojis.length];

  // イベントハンドラを定義
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* EmojiDisplayコンポーネントを使用 */}
        <EmojiDisplay currentEmoji={currentEmoji} />

        <p>You clicked {count} times</p>
        <p>count % emojis.length: {count % emojis.length}</p>

        {/* CounterButtonコンポーネントの使用 (clickボタン) */}
        {/* onClickとtitleをPropsとしてコンポーネントに渡す */}
        <CounterButton onClick={handleIncrement} title="Click me" />

        {/* CounterButtonコンポーネントの使用 (resetボタン) */}
        <CounterButton onClick={handleReset} title="Reset" />
      </header>
    </div>
  );
};

export default CounterExample;
