import Addtodo from "./Addtodo";
import React, { useEffect, useRef, useState } from "react";
import Todolist from "./Todolist";
import { Routes, Route } from "react-router-dom";
import Editcomp from "./EditComp";
import NavBar from "./NavBar";
const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [value , setValue] =useState("");

  const [alltodos , setAlltodos] = useState([]);

//   useEffect(()=>{
//     setAlltodos(todos)
//   } , [todos])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setAlltodos(todos)
    filterselect(value)
  }, [todos , value]);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
    // setAlltodos([...todos, todo]);
  };

  const removeHandler = (id) => {
    const filtertodos = todos.filter((todo) => todo.id !== id);
    setTodos(filtertodos);
    // setAlltodos(filtertodos)
  };

  const filterselect = (selctedoption) => {
    switch (selctedoption.value) {
      case "completed":
        const filtertodos = todos.filter((todo) => todo.isCompleted == true);
        return setAlltodos(filtertodos);
      case "uncompleted":
        const filtertodos1 = todos.filter((todo) => todo.isCompleted == false);
        return setAlltodos(filtertodos1);
      case "All":
        return setAlltodos(todos)
      default:
        return setAlltodos(todos);
    }
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id == id);
    const selected = { ...todos[index] };
    selected.isCompleted = !selected.isCompleted;
    const alltodo = [...todos];
    alltodo[index] = selected;
    setTodos(alltodo);
    // setAlltodos(alltodo)
  };

  return (
    <>
      <NavBar todos ={todos} filterselect={filterselect} value={value} setValue={setValue} />
      <Addtodo todoHandler={todoHandler} />
      <Todolist
        todos={alltodos}
        removeHandler={removeHandler}
        completeHandler={completeHandler}
      />
    </>
  );
};

export default TodoApp;
