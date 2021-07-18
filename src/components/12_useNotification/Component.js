import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) return; //window.Notification에 접근할 수 없으면 취소
  const fireNotif = () => {
    //Notification.permission (Read only) 사용자 알림 허용 여부
    // denined / granted / default : default라면 사용자 선택을 알 수 없으므로 denined로 여긴다.
    if (Notification.permission !== "granted") {
      // 알림 허용이 되어있지 않다면 허용 요청을 띄운다.
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function Component() {
  const triggerNotification = useNotification("Notification!!", {
    body: "How are you?",
  });
  return (
    <div>
      <button onClick={triggerNotification}>Hello Hello</button>
    </div>
  );
}

export default Component;

/* 
  useNotification은 알림을 사용할 수 있게 해준다. Hook은 아니다.
  (크롬 알림, Mac 알림, Window 알림 등 - 화면 오른쪽에 알림음과 함께 뜸)
  notification API를 사용

  인자로 알림 title과 알림 옵션을 받을 수 있다.
  만약 알림 허용이 granted가 아니라면 허용 요청창을 띄운다.
  granted라면 알림을 동작한다.
  알림 동작 함수를 반환하여 엘리먼트의 props로 전달할 수 있다.
*/
