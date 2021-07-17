import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "this is content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "this is content of the Section 2",
  },
  {
    tab: "Section 3",
    content: "this is content of the Section 3",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  console.log(allTabs);
  if (!allTabs || !Array.isArray(allTabs)) return;
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const Component = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default Component;

/*
  useTabs는 초기 탭 인덱스와, 전체 텝 콘텐츠 배열을 인자로 받는다.
  그리고 현재 선택된 탭과 useState로 반환된 setCurrentIndex를 반환한다.

  컴포넌트에서는 useTabs로 현재 선택된 탭과 setCurrentIndex를 담은 changeItem을 사용한다.
  위쪽에는 content를 이용하여 탭 버튼들을 생성하는데, 
  이때 각 index에 맞는 onClick 콜백함수를 작성한다.
  
  *주의* : 화살표 함수가 아닌 그냥 changeItem(index) 라고 작성하면,
   매 리랜더링 마다 함수를 그냥 실행시키는 것이므로, 실행문이 아닌 콜백함수 형태로 작성해준다.

   아래 쪽에는 useTabs에서 반환된 현재 선택된 탭의 content를 보여준다.

*/
