// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // countという状態を作成し、初期値を0に設定
  const [count, setCount] = useState(0);

  // ボタンがクリックされた時にカウントアップする関数
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>カウントアップ</button>
    </div>
  );
}

export default Counter;
