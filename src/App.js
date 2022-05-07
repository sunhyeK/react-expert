import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import IsRender from './IsRender';
import UseStateCounter from './UseStateCounter';
import InputState from './InputState';
import InputStateMulti from './InputStateMulti';

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

      {/* JSX 삼항연산자 */}
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
      <Hello user="sophie" color="blue"/>

      {/* component, props.children */}
      <Wrapper>
        <Hello user="sophie" color="red"/>
      </Wrapper>


      {/* 조건부 렌더링 */}
      <IsRender isRender={true}/>

      {/* 조건부 렌더링 
        값 생략 시, default true로 간주 
        */}
      <IsRender isRender />

      {/* UseState */}
      <UseStateCounter/>

      {/* input state 관리 */}
      <InputState/>

      {/* multiple input state 관리 */}
      <InputStateMulti />
    </div>
  );
}

export default App;