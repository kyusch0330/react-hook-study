import React from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    //window가 닫히기 전에 실행될 것 작성
    event.preventDefault();
    event.returnValue = ""; // 크롬에서 동작하기 위한 코드
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};

function Component() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unrotect</button>
    </div>
  );
}

export default Component;

/*
  05_useConfirm와 06_usePreventLeave은 사실 Hook이 아니다.
  useState, useEffect를 사용하지 않는다.
  
  => 함수형 프로그래밍 이해에 도움 (SKIP해도 됨)
*/

/* 
  usePreventLeave는 window창을 닫을 때
  아직 저장하지 않음을 알릴 때 사용

  enablePrevent를 동작시킨 후 창을 벗어나려 하면 (새로고침으로 테스트 하기)
  변경사항이 저장되지 않았음을 알리는 확인창이 나옴.
  enablePrevent가 "beforeunload" 이벤트 리스너를 설정했기 때문이다.
  disablePrevent는 반대로 이벤트 리스너를 제거한다.
*/
