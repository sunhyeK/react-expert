import { useState } from 'react';

function InputState() {
  const [text, setText] = useState('');
  // '' 초기 String 값

  const onChange = (e) => {
    setText(e.target.value); // 이벤트가 발생한 DOM 인 input DOM = 현재 input에 입력된 값
  };
  // (e) 이벤트 객체

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div> 값: {text} </div>
    </div>
  );
}

export default InputState;
