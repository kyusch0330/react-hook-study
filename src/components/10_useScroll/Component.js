import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return state;
};

function Component() {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello~!
      </h1>
    </div>
  );
}

export default Component;

/*
  useScroll은 스크롤 상태에 따라 동작을 실행할 수 있는 유용한 기능
  useEffect로 window 객체에 scroll 이벤트 리스너를 설정해준다.
  스크롤이 변화하면 현재 스크롤 위치를 갱신한다.
  새로운 스크롤 위치에 따라 컴포넌트를 리랜더링하게 된다.
*/
