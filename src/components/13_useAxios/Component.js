import React, { useEffect, useState } from "react";

import defaultAxios from "axios"; //axios 설치 후 import

// axios는 약간의 customaization과 configuration을 허용한다.
// e.g. default URL, automatic header... etc.
// axios instance를 얻지 못한다면, 패키지에서 기본 axios를 전달
const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0); // useEffect를 trigger
  const reFetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          data: response,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error, // error: error
        });
      });
  }, [trigger]); //trigger가 변화하면 refetch 수행
  return { ...state, reFetch };
};

function Component() {
  const { loading, data, error, reFetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(loading, data, error);
  return (
    <div>
      <h1>data : {data ? data.status : "no data"}</h1>
      <h2>{loading && "Loading..."}</h2>
      <button onClick={reFetch}>Refetch</button>
    </div>
  );
}

export default Component;

/* 
  axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 동신 라이브러리
  useAxios는 인자로 axios options과 axios instance를 받고 존재하지 않으면 기본 axios instance를 사용,
  컴포넌트에서 useAxios의 파라미터로 넘겨준 options의 url의 응답을 받아 state에 저장 후 반환한다.

  원할 때 refetch를 수행할 수 있게 trigger를 useEffect의 디펜던시에 추가하면,
  trigger를 변화시켜 useEffect를 수행시킬 수 있다.

  state에 loading을 추가하여 데이터 fetch가 완료되었는지 나타낼 수 있다.
*/
