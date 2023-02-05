import { useState } from "react";
import Select from "react-select"

const NavBar = ({ todos , filterselect , value , setValue }) => {
  const uncompletedtodos = todos.filter((todo) => todo.isCompleted == false);

//   const [value , setValue] =useState("");

const options = [
    {value : "ALL" , label : "All"},
    {value : "completed" , label : "completed"},
    {value : "uncompleted" , label : "uncompleted"}
]

  const rendertodos = () => {
    return uncompletedtodos.map((todo) => {
      return <span key={todo.id}>uncompleted : {todo.title}</span>;
    });
  };

  const changeHandler = (selctedoption) => {
    // console.log(e.target.value)
    setValue(selctedoption);
    console.log(selctedoption)
    filterselect(selctedoption)
  }

  return (
    <>
      <div className="uncomp">
        {!uncompletedtodos ? <p>all todos are completed</p> : rendertodos()}
      </div>

      <div className="uncomp">
        {/* <select onChange={changeHandler}>
            <option value="All">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
        </select> */}
        <Select 
        value={value}
        onChange={changeHandler}
        options={options}
        />
      </div>
    </>
  );
};

export default NavBar;
