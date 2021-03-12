import { useReducer } from "react"

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "INCREASE":
            return {value: state.value + 1};
        case "DECREASE":
            return {value: state.value - 1};
        default:
            return state;
    }
}

export default function CounterReducer() {
    
    const [state, dispatch] = useReducer(reducer, {value : 0});

    return (
        <>
            <h2>Reducer를 사용한 counter</h2>
            <h3>{state.value}</h3>
            <button onClick = { () => dispatch({type: "INCREASE"}) }>+1</button>
            <button onClick = { () => dispatch({type: "DECREASE"}) }>-1</button>
        </>
    );
}