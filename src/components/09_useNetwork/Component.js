import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  //navigator.onLine은 boolean값 반환, 웹사이트가 온라인인지 판별
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

function Component() {
  const handleNetworChange = (online) =>
    console.log(online ? "online!!" : "offline...");
  const onLine = useNetwork(handleNetworChange);
  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
}

export default Component;

/*
  useNetwork는 navigator가 online 또는 offline이 되는 것을 막아준다.
   network 상태가 바뀔 때 마다 함수를 실행시킨다.

   네트워크 상태가 (online, offline) 변화하면, 이벤트가 발생하여
   handleChange 콜백이 작동하고, 현재 네트워크 상태를 status에 저장한다.
   status를 반환받아 온라인 상태를 표시한다.

   * 네트워크 상태 on/off 는 개발자도구 Network에서 변경가능하다.
*/
