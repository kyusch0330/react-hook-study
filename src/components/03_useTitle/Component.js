import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); // <title> </title>
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function Component() {
  const titleUpdater = useTitle("Loading");
  setTimeout(() => titleUpdater("Home"), 3000);
  return <div></div>;
}

export default Component;

/*
  setTimeout으로 n 밀리초 후에 title이 변경된다.
  title이 변하면 title을 디펜던시로 가지는 useEffect는 updateTitle로 타이틀 요소를 수정한다.
*/
