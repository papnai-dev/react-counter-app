import "./Button.css";

const Button=(props)=>{
  //const [num, setNum] = useState(0);
    return (
    <button className="myButton" onClick={() => {props.setNum(props.num + Number(props.operation))}}>
        {props.operation}
    </button>
    );
}

export default Button;