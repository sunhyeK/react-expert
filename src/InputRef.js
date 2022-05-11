import { useState, useRef } from "react";

function InputRef() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const nameInput = useRef(); // 1. ref 객체 생성

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    console.log(nameInput); // 3. nameInput의 current가 input 요소를 가리키고 있음을 확인
    nameInput.current.focus(); // 4. 원하는 DOM API 호출
  };
  return (
    <div>
      {/* 2. 원하는 DOM 요소에 ref 지정 */}
      <input
        placeholder="이름"
        onChange={onChange}
        name="name"
        value={name}
        ref={nameInput}
      />
      <input
        placeholder="닉네임"
        onChange={onChange}
        name="nickname"
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        값:
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputRef;
