import React from "react";
import ReactDOM from "react-dom/client";
import CounterExample from "./CounterExample.tsx";

//　マウントするHTML要素 (public/index.html の <div id="root"> )を取得
// TypeScriptでは、取得した要素がHTMLElement型であることを明示するために as キーワードで保証
const rootElement = document.getElementById("root") as HTMLElement;

// root要素の存在チェックとマウント処理
if (rootElement) {
  // 新しいReactのレンダリングルートを作成
  const root = ReactDOM.createRoot(rootElement);

  // <CounterExample />をブラウザにレンダリング
  root.render(
    // 開発時に潜在的な問題を検出するStrictMode機能を使用
    <React.StrictMode>
      <CounterExample />
    </React.StrictMode>
  );
} else {
  // root要素が見つからない場合は開発者コンソールにエラーを表示
  console.error("エラー: ID 'root' を持つ要素が見つかりませんでした。");
}
