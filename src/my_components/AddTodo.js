import React, { useState } from "react";
export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Todo cannot be blank");
    } else {
      props.addTodo(title);
      setTitle("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a todo</h3>
      <form onSubmit={submit}>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Write your todo
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="form-control"
            id="title"
            placeholder="Enter your todo"
          />
        </div>

        <button type="submit" class="btn btn-sm btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};
