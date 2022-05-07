import { useState } from 'react';

function InputStatusMulti () {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    }); //inputs의 default

    const {name, nickname} = inputs;

    const onChange = (e) => {
        /*
        onChange를 호출하는 곳이 이름, 닉네임 2개니까
        호출한 녀석(e.target)의 name과 value를 받아서 어느 쪽인지 파악하고

        */ 
        const {name, value} = e.target; // 배열 비구조화 할당 X 객체 O
        console.log(inputs);
        setInputs({
            ...inputs,
            [name]: value
            // 스프레드문법을 먼저 사용하고 name 상태를 변경해주면, 기존 상태는 살아있고 name만 변경
        });
        console.log(inputs);
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    };
    return (
        <div>
            <input placeholder="이름" onChange={onChange} name="name" value={name}/>
            <input placeholder="닉네임" onChange={onChange} name="nickname" value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                값:
                {name} ({nickname})
            </div>

        </div>
    )
}

export default InputStatusMulti;