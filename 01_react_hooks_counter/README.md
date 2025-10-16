# Emoji Counter

React + TypeScript を使用した絵文字カウンターアプリケーションです。
React の基本的な概念（useState、コンポーネント設計、TypeScript）を学習するためのプロジェクトです。

## 機能

- **絵文字の切り替え**: クリックするたびに異なる絵文字が表示されます
- **手動カウント**: ボタンクリックでカウントを増加できます
- **リセット機能**: カウンターを 0 に戻すことができます
- **デバッグ表示**: 配列のインデックス計算を確認できます

## 技術スタック

- **React 19.2.0** - UI ライブラリ
- **TypeScript** - 型安全な JavaScript
- **React Hooks** - useState
- **CSS3** - スタイリング

## プロジェクト構造

```
src/
├── index.tsx              # アプリケーションのエントリーポイント
├── CounterExample.tsx     # メインコンポーネント（状態管理・ロジック）
├── EmojiDisplay.tsx       # 絵文字表示専用コンポーネント
├── CounterButton.tsx      # ボタン専用コンポーネント
└── CounterExample.css     # スタイルシート
```

## 学習ポイント

### 1. **useState フック**

```typescript
const [count, setCount] = useState<number>(0);
```

- コンポーネント内での状態管理
- TypeScript での型指定
- 状態更新時の関数形式の使用

```typescript
const handleIncrement = () => {
  setCount((prevCount) => prevCount + 1);
};
```

### 2. **コンポーネント設計**

- **関心の分離**: 各コンポーネントが単一の責任を持つ
- **Props**: 親から子へのデータ渡し
- **再利用性**: 汎用的なコンポーネントの作成

### 3. **TypeScript 活用**

```typescript
// Props型定義
interface EmojiDisplayProps {
  currentEmoji: string;
}

interface CounterButtonProps {
  onClick: () => void;
  title: string;
}
```

- 型安全性の確保
- インターフェース定義
- 型推論の活用

### 4. **配列操作とモジュロ演算**

```typescript
const currentEmoji: string = emojis[count % emojis.length];
```

- 配列の循環アクセス
- モジュロ演算（%）の活用
- デバッグ表示での計算確認

## コード解説

### 状態管理の流れ

1. `count`状態が変更される
2. `currentEmoji`が再計算される
3. コンポーネントが再レンダリングされる
4. UI が自動更新される

### コンポーネントの責任分離

- **CounterExample**: 状態管理、ロジック、イベントハンドラー
- **EmojiDisplay**: 絵文字表示のみ（Props で受け取った絵文字を表示）
- **CounterButton**: ボタン表示とクリック処理のみ（Props で受け取った関数を実行）

### モジュロ演算の仕組み

```typescript
// 例：emojis配列が10個の場合
count = 0  → 0 % 10 = 0  → emojis[0] = "😀"
count = 5  → 5 % 10 = 5  → emojis[5] = "😅"
count = 10 → 10 % 10 = 0 → emojis[0] = "😀" (循環)
count = 15 → 15 % 10 = 5 → emojis[5] = "😅" (循環)
```
