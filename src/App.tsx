//import React, { SyntheticEvent } from 'react';
import { atom, useRecoilState } from "recoil"

const passwordState = atom({
  key: "password",
  default : ""
})

const validState = atom({
  key: "validation",
  default: "Wrong."
})

function App() {
  const [password, setPassword] = useRecoilState(passwordState);
  const [validation, setValidation] = useRecoilState(validState)

  const handleButtonClick = () => {
    if(password === "0000") {
      setValidation("Right");
    } else {
      setValidation("Wrong");
    }
  }

  const handleChange = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      <input 
        type = "password"
        value = {password}
        onChange = {handleChange}
      />
      <button
        onClick = {handleButtonClick}
      >
        검증하기9
      </button>
      <h2>{validation}</h2>
    </div>

  );
}

export default App;