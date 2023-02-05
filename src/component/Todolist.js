import { Link } from "react-router-dom";

const Todolist = ({ todos, removeHandler, completeHandler }) => {
  const renderproduct = () => {
    return todos.map((todo) => {
      return (
        <div
          key={todo.id}
          className={todo.isCompleted ? "completed" : "todopart"}
        >
          <span>{todo.title}</span>
          <Link to={`/edit/${todo.id}`} state={{todo}}>
            <button>edit</button>
          </Link>
          <button onClick={() => completeHandler(todo.id)}>Complete</button>
          <button onClick={() => removeHandler(todo.id)}>delete</button>
        </div>
      );
    });
  };

  return (
    <div className="todolist">
      {!todos.length ? <p>There is no todo for showing</p> : renderproduct()}
    </div>
  );
};

export default Todolist;
