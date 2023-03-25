// useInput
import { useState, useCallback } from "react";

const useInput = (initalValue = null) => {
    // state 정의
    const [data, setData] = useState(initalValue);

    // 함수 정의
    const handler = useCallback(
        e => {
            const { value, name } = e.target;
            setData({
                ...data,
                [name]: value
            });
            console.log(value, name);
        },
        [data]
    );
    return [data, handler];
};

export default useInput;