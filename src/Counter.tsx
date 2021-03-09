import { useState } from "react";
import { atom, useRecoilState } from "recoil"

const countState = atom({
    key : "count",
    default : 0
})

export default function Counter() {
    // const [count, setCount] = useState(0);
    const [count, setCount] = useRecoilState(countState);

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