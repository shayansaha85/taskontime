import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete }) => {
  let todosStyle = {
    minHeight: "80vh",
    margin: "10px auto",
  };
  return (
    <div className="container py-3" style={todosStyle}>
      <h3 className="my-3">Todos List</h3>
      {todos.length === 0
        ? "No todos to display"
        : todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />;
          })}
    </div>
  );
};
