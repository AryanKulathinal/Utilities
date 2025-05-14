import { useReducer, useState } from "react";
import { FiTrash2, FiCheckSquare, FiCheckCircle } from "react-icons/fi";
import "../styles/To-do.css";

type Todo = {
  id: number;
  text: string;
  status: string;
};

type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "update"; payload: number };

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "add":
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        status: "Pending",
      };
      return [...todos, newTodo];
    case "remove":
      return todos.filter((todo) => todo.id !== action.payload);
    case "update":
      return todos.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              status: todo.status === "Pending" ? "Completed" : "Pending",
            }
          : todo
      );
    default:
      return todos;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch({ type: "add", payload: input });
      setInput("");
    }
  };

  return (
    <div className="to-do">
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={handleAdd}>Add</button>
      <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>
              <strong>{todo.text} </strong>
              {todo.status === "Completed" && (
                <FiCheckCircle className="check-circle" />
              )}
            </span>
            <div>
              <button
                onClick={() => dispatch({ type: "remove", payload: todo.id })}
                title="Delete"
              >
                <FiTrash2 />
              </button>
              <button
                onClick={() => dispatch({ type: "update", payload: todo.id })}
                title="Toggle Status"
              >
                <FiCheckSquare />
              </button>
            </div>
          </li>
        ))}
      </ul>

      </div>
      
    </div>
  );
};

export default Todo;
