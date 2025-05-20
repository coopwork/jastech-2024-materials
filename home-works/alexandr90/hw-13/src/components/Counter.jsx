import { useState } from "react";
import Button from "./Button";



const Counter = ()=> {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(p => p + 1)
  }

  const dec = () => {
    setCount(count - 1)
  }

  return(
    <div style={{padding:25}}>
      <h2>
        {count}
      </h2>

      <Button onClick={inc}>+</Button>
      <Button onClick={dec}>-</Button>
    </div>
  )
}

export default Counter;