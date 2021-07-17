import React, { useState, useEffect } from "react";

function Component() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(() => console.log("useEffect done"), [num]);
  return (
    <div>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
      <div>{num2}</div>
      <button onClick={() => setNum2(num2 + 1)}>+</button>
      <button onClick={() => setNum2(num2 - 1)}>-</button>
    </div>
  );
}

export default Component;

/*
  useEffect는 function 컴포넌트에서 
  class 컴포넌트의 componentDidMount, ...DidUpdate, ...WillUnmount를 대신할 수 있다.
  useEffect에 대한 추가 설명과 관련된 사용자 정의 Hook은 03 부터...
*/
