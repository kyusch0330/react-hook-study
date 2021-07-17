import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const Component = () => {
  const validFunction = (value) => {
    /* . . . . . */
  };
  const name = useInput("initialValue", validFunction);
  return <input placeholder="write here" {...name} />;
};

export default Component;

/*
  useInput 은 초기값 initialValue과 유효성 검사 함수 validator를 인자로 받는다.

  initialValue : useState의 초기값 인자로 전달
  validator : input 값이 변화할 때마다 onChange가 수행되면, 전달된 validator에서
  현재 입력값이 유효하면 true를, 아니면 false를 반환한다.

  최종적으로 value와 onChange가 반환되고, input의 props로 전달되어 연계되는 형태이다.
  input은 value를 전달받기 때문에 만약 onChange 내부의 유효성 검사에서 false가 반환되면 setValue가 수행되지 않아 input에 입력되지 않을 것이다.

  useInput을 사용하면 초기값과 유효성 검사 함수를 커스터마이징할 수 있는 장점이 있다.
*/
