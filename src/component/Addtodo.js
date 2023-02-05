import { useEffect, useState , useRef } from "react";

const Addtodo = ({todoHandler}) => {
  const [text , setText] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  } , [])

  const changetodoHandler = (e) => {
    setText(e.target.value);
  }

  const submitHandler =(e) => {
    e.preventDefault();
    const todo = {
        id : new Date().getTime(),
        title : text,
        isCompleted : false
    }
    todoHandler(todo);
    setText("");
  }

  return (
    <div className="addtodo">
      <form onSubmit={submitHandler}>
        <input type="text" value={text} onChange={changetodoHandler} placeholder="insert your todo" ref={inputRef} />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Addtodo;
