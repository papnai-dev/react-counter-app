import react, { useState } from "react";
import "./Counter.css";
import Button from "./Button";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
      <div className="parent-counter">
    <div className="counter">
      <Button operation={`-10`} num={num} setNum={setNum}/>
      <Button operation={`-5`} num={num} setNum={setNum}/>
      <Button operation={`-1`} num={num} setNum={setNum}/>
      <div className="num">{num}</div>
      <Button operation={`+1`} num={num} setNum={setNum}/>
      <Button operation={`+5`} num={num} setNum={setNum}/>
      <Button operation={`+10`} num={num} setNum={setNum}/>
    </div>
    <button class="reset-btn" onClick={()=>setNum(0)}>RESET</button>
    </div>
  );
};

export default Counter;
