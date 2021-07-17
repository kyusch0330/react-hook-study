import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 3, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") return;
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s , color 7s`;
      current.style.opacity = 1;
      current.style.color = "black";
    }
  }, []);

  return { ref: element, style: { opacity: 0, color: "green" } };
};

function Component() {
  const fadeInH1 = useFadeIn(5, 3);
  const fadeInP = useFadeIn(10);
  return (
    <div>
      <h1 {...fadeInH1}>Hello~</h1>
      <p {...fadeInP}>Lorem Ipsum blablabla</p>
    </div>
  );
}

export default Component;

/*
  useFadeIn은 요소를 서서히 나타나게 해준다. (지연 기능 포함)
  물론 CSS로도 만들 수 있기는 하다.
  
  useFadeIn의 반환값을 요소의 props로 전달해준다.
  전달하는 값은 ref와 style이다.

  useFadeIn은 인자로 애니메이션 지속시간 duration과 시작 지연시간 delay를 받는다. 
  useFadeIn에서 useEffect는 변화 후 스타일과 transition 을 지정해주어
  지속시간을 지정할 수 있다.
*/
