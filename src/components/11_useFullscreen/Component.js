import React, { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
    // 전체화면 전환 시 콜백 동작
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };
  const exitFullscreen = () => {
    // 전체화면으로 전환은 element에서 requestFullscreen()을 호출했지만,
    // 전체화면을 종료할 때는 document에서 exitFullscreen()을 호출한다.
    if (document.fullscreenElement) {
      // 전체화면 요소가 있을 때만 전체화면 종료
      document.exitFullscreen();
    }
    // 전체화면 종료 시 콜백 동작
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFullscreen, exitFullscreen };
};

function Component() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFullscreen, exitFullscreen } = useFullscreen(onFulls);
  return (
    <div>
      <div ref={element}>
        <img
          style={{ width: "200px" }}
          src="https://img.animalplanet.co.kr/news/2020/02/27/700/0vx98160680bv9pp7f1e.jpg"
          alt="sample"
        />
        <button onClick={exitFullscreen}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFullscreen}>Make Fullscreen</button>
    </div>
  );
}

export default Component;

/* 
  useFullScreen은 ref가 참조하는 element를 전체화면으로 보여지게 해준다.
  useRef로 참조하는 element와 requestFullscreen을 실행하는 trigger를 반환한다.
  전체화면으로 보고싶은 엘리먼트(e.g.이미지)에 ref를 전달해주고,
  trigger를 작동시키면 전체화면 모드로 보여준다.

  같은 방식으로 exitFullScreen을 사용하면 전체화면 종료 기능도 구현 가능하다.
  -> element.current.requestFullscreen()과 달리
     document.exitFullscreen()인 것 주의
*/

/*
  필요하면 callback을 넘겨줘서 전체화면 실행 시, 종료 시 동작을 추가할 수 있다.
*/

/*
  브라우저 호환성 문제가 있다.
  아래와 같이 체크가 필요하다.

  if(element.current.requestFullscreen) {
    element.current.requestFullscreen();
  } else if (element.current.mozRequestFullscreen) { //Firefox
    element.current.mozRequestFullscreen();
  } else if (element.current.webkitRequestFullscreen) { //Opera
    element.current.webkitRequestFullscreen();
  } else if (element.current.msRequestFullscreen) { //Microsoft
    element.current.msRequestFullscreen()'
  }

*/
