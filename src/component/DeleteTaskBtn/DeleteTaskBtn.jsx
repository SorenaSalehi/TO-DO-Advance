import React from "react";

import { useTodo } from "../../Context/TodoContext";

export default function DeleteTaskBtn({ id }) {
  const { dispatch } = useTodo();

  function handleDelete() {
    dispatch({ type: "taskDeleted", payload: id });
  }

  return (
    <button className="taskBtn btnDelete" onClick={handleDelete}>
      &times;
    </button>
  );
}
