import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore(); //위쪽으로 벗어났을 시에만
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function Component() {
  const pleaseDontLeave = () => console.log("Please dont leave!");
  useBeforeLeave(pleaseDontLeave);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Component;

/*
  useBeforeLeave는 커서가 문서를 벗어날 때 작동할 수 있는 function
  document에 mouseleave 이벤트 리스너를 적용하여
  마우스 포인터가 document 밖을 나가면 콜백이 수행된다.
*/
