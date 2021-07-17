import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  // 기존 const element = useRef();
  // if(element.current) element.current.addEvent.... 였지만 Warning으로 인해 수정

  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClick);
    }

    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref.current;
};

function Component() {
  const sayHello = () => console.log("Hello!");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default Component;

/*
  referernce에 대해 알아본다.
  어떤 요소의 ref를 가지면 해당 요소를 제어할 수 있다.
  (마치 getElementById 같이)

  * react의 모든 component들은 ref prop을 가진다.

  ref의 current로 현재 참조하는 요소에 접근 가능
*/

/*
  useClick은 ref를 반환하는데,
  useEffect로 해당 ref는 이벤트리스너가 부착된다.
  ref가 전달된 요소에 click 이벤트가 발생하면, 인자로 전달된 콜백함수가 실행된다.
  이 경우에는 console.log("Hello!")가 실행

  return을 통해 class 컴포넌트에서 componentWillUnmount의 역할을 수행
*/
