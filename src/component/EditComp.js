import { useState } from "react";
import { json, Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Editcomp = ({editHandler}) => {
  //   const {id} = useParams();
  //   console.log(id);
  const loc = useLocation();
    // console.log(loc.state.todo.title);
  const edititem = loc.state.todo;

  const [newtext, setNewtext] = useState(loc.state.todo.title);

  const navigate = useNavigate();

  

  const changeHandler = (e) => {
    setNewtext(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem("todos"));
    const selected = todos.find(item => item.id == loc.state.todo.id);
    selected.title = newtext;
    // todos.push(selected);
    localStorage.setItem("todos" , JSON.stringify(todos));
    navigate("/");
  };

  return (
    <div className="addtodo">
      <form onSubmit={submitHandler}>
        <input type="text" value={newtext} onChange={changeHandler} />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default Editcomp;
