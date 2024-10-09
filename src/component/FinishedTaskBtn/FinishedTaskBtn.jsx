import React from "react";

import { useTodo } from "../../Context/TodoContext";

export default function FinishedTaskBtn({ task }) {
  const { dispatch } = useTodo();
  function handleFinished() {
    dispatch({ type: "taskFinished", payload: { ...task, isFinished: true } });
  }
  return <button className="taskBtn btnCheck" disabled={task.isFinished} onClick={handleFinished}>&#10003;</button>;
}
