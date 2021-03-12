import { useReducer } from "react";

function reducer(state: any, action: any) {
    return {
        ...state,
        [action.name] : [action.value]
    }
}

export default function Info() {
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        nickName: ""
    })

    const {name, nickName} = state;

    const onChange = (e: any) => {dispatch(e.target)}
    return (
        <>
            <h2>Info</h2>
            <input name = "name" value = {name} onChange = {onChange} ></input>
            <input name = "nickName" value = {nickName} onChange = {onChange}></input>
            <div>
                <b>이름: {name}</b>
            </div>
            <div>
                <b>닉네임: {nickName}</b>
            </div>
        </>

    );
}