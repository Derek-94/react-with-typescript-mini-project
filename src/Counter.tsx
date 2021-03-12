import { useState, useEffect } from "react";
//import { atom, useRecoilState } from "recoil"

// const countState = atom({
//     key : "count",
//     default : 0
// })

export default function Counter() {
    const [count, setCount] = useState(0);
    // const [count, setCount] = useRecoilState(countState);

    // https://simsimjae.tistory.com/401 -> useEffect 자료 참고.
    // rerendering, 클린업, 이펙트 실행 순서.
    useEffect(() => {
        console.log(`count 값은 ${count}이다.`);
        return () => {
            console.log(`Clean Up, count 값은 ${count}이다.`);
        }
    })

    const onIncrease = () => { setCount(count + 1) };
    const onDecrease = () => { setCount(count - 1) };

    return (
        <>
            <h2>Counter 구현하기.</h2>
            <h3>{count}</h3>
            <div>
                <button onClick = {onIncrease}>+1</button>
                <button onClick = {onDecrease}>-1</button>
            </div>
        </>
    );
}