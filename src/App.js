import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import IsRender from './IsRender';
import UseStateCounter from './UseStateCounter';
import InputState from './InputState';
import InputStateMulti from './InputStateMulti';
import InputRef from './InputRef';

function App() {
  const loginYn = 'Y';
  const inlineStyle = {
    background: 'lightpink',
    fontWeight: 'light'
  }
  return (
    <div className="App">
      <header className="App-header">
        React
      </header>

      {/* JSX 조건문 _ 삼항연산자 */}
      <h3>JSX 조건문 _ 삼항연산자</h3>
      <div className="Class-Test">
				{
					loginYn === 'Y' 
					? ( <div>Sophie 입니다.</div> ) 
					: ( <div>비회원 입니다.</div> )
        } 
      </div>

      <div style={inlineStyle}>
        inline style
      </div>

      {/* component, props */}
      <h3>component, props</h3>
      <Hello user="sophie" color="blue"/>

      {/* component, props.children */}
      <h3>component, props.children</h3>
      <Wrapper>
        <Hello user="sophie" color="red"/>
      </Wrapper>

      {/* 조건부 렌더링 */}
      <h3>조건부 렌더링</h3>
      <IsRender isRender={true}/>
      <IsRender isRender /> {/* 값 생략 시, default true로 간주 */}

      {/* UseState */}
      <h3>UseState</h3>
      <UseStateCounter/>

      {/* input state 관리 */}
      <h3>input state 관리</h3>
      <InputState/>

      {/* multiple input state 관리 */}
      <h3>multiple input state</h3>
      <InputStateMulti />

      {/* useRef */}
      <h3>useRef</h3>
      <InputRef />
    </div>
  );
}

export default App;