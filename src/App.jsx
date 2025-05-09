import React from 'react';
import viteLogo from '/vite.svg'
import './App.css'

import Hello from './components/Hello';
import Counter from './components/Counter';
import InputBox from './components/InputBox';
import TodoApp from './components/TodoApp';

function App() {
  const images = [
    '/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg'
  ];

  return (
    <>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} className="pic" alt={`Photo ${index + 1}`} />
        ))}
        <img src="/1.jpeg" className="pic" alt="表示したい"/>
      </div>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        
        </a>
        
      </div>
      <h1>タイトル</h1>
      <div className="card">
        
        <p>
          いりません
        </p>
        <onclick></onclick>
      </div>
      <p className="read-the-docs">
        そんなコメントはいりません
      </p>
      <Hello />  {/* Hello コンポーネントを表示 */}
      <Counter/>
      <InputBox/>
      <TodoApp/> 
    </>
  );
}

export default App


// 動的に画像をインポート

/*
function App() {
  // src/assets内の全てのjpg, jpeg, png画像を動的にインポート
  const images = import.meta.glob('./public/images/*.{jpg,jpeg,png}');

  return (
    <div>
      {Object.keys(images).map((imagePath, index) => {
        const image = images[imagePath]();
        return (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} style={{ width: '200px' }} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
*/