import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (
    !onConfirm ||
    typeof onConfirm !== "function" ||
    typeof onCancel !== "function"
    //onCancel은 없어도 됨
  )
    return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

function Component() {
  const deleting = () => console.log("deleting...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleting, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete</button>
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
  useConfirm 은 confirm 동의 시 동작 함수 callback과,
   취소 시 동작함수 rejection을 받아 confirm 여부에 따라 동작한다.
*/
