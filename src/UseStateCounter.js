import { useState } from 'react';

function Counter() {
    const [ number, setNumber ] = useState(0);
    // 1. 기본값을 파라미터로 넣어서 useState 호출
    // 2. 반환되는 배열 중 현재 상태인 number와, Setter 함수만 배열 비구조화 할당으로 추출

    const onIncrease = () => {
        console.log('onIncrease');
        setNumber(number + 1); // 3-1. setter 함수 _ 파라미터로 전달 받은 값(number + 1)을 최신 상태로 설정
        console.dir(number);
    }
    const onDncrease = () => {
        console.log('onDncrease');
        setNumber(number => number - 1); // 3-4. setter 함수 함수형 업데이트 _ 기존 값(preNumber)을 "어떻게 업데이트 할지"
        console.dir(number); // 상태값 변경을 배치로 처리한다?
    }

    return (
        <div>
            <div>{number}</div>
            <button onClick={onIncrease}> +1 </button>
            <button onClick={onDncrease}> -1 </button>
        </div>
    );
}

export default Counter;