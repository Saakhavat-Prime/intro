import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos)=>{
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]

    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };
  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          }
        }
          else{
            return todo;
          }
      }),
    );
  };

  return (
    <div className="container">
      <div className="flex">
        <input
          type="text"
          placeholder="Add New Task"
          onChange={updateTodoValue}
          value={newTodo}
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <h4>Task Todo</h4>
      <div className="list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span style={todo.isDone ? {textDecorationLine:"line-through"}: {}}>{todo.task}</span>
              <span>
                <button onClick={() => deleteTask(todo.id)}>delete</button>
                <button onClick={() => markAsDone(todo.id)}> Mark as Done</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={upperCaseAll}>upperCaseAll</button>
    </div>
  );
}

export default TodoList;
