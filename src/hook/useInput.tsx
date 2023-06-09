// useInput
import { useState, useCallback } from 'react';

const useInput = (initalValue = null) => {
  // state 정의
  const [data, setData] = useState<null | object>(initalValue);

  // 함수 정의
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData(state => ({
      ...state,
      [name]: value,
    }));
  }, []);
  return [data, handler];
};

export default useInput;
