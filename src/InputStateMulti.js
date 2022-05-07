import { useState } from 'react';

function InputStateMulti () {
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
        setInputs({
            ...inputs,
            [name]: value
            /*
                Q1. 스프레드 문법을 먼저 사용해서 기존 state를 복사함으로서 유지하고, 그 후 name 상태를 변경해준다? setState
                A.

                Q2. state의 property를 직접 수정하면 안되는건지? 리렌더링이 되지 않는건지?
                A. React에선 얕은 비교를 통해 새로운 값인지 아닌지 판단 후 새로운 값인 경우 리랜더링하기 때문에 state의 값만 직접 변경한 경우에는 참조 값은 변하지 않았기 때문에 같은 값으로 판단하고 리렌더링 하지 않는다.
            */

        });
    };

    const onReset = () => {
        console.log(inputs);
        setInputs({
            name: '',
            nickname: ''
        })
        console.log(inputs);
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

export default InputStateMulti;