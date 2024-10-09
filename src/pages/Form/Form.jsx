import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";
import { useTodo } from "../../Context/TodoContext";
import AppNav from "../../component/AppNav/AppNav";

export default function Form() {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("08/18/1997");
  const navigate = useNavigate();
  const { dispatch } = useTodo();

  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "formSubmitted",
      payload: { task, description: desc, date, id, isFinished: false },
    });
    navigate("/tasks");
  }
  return (
    <div className={styles.formPage}>
      <AppNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.header}>ARE YOU READY ? 🙂</h1>

        <label htmlFor="task">TASK</label>
        <input
          required
          autoFocus
          type="text"
          id="task"
          placeholder="Your task title ..."
          className={styles.task}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          placeholder="Describe Your Task (OPTIONAL)"
          className={styles.desc}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <label htmlFor="date">DATE</label>
        <input
          type="date"
          id="date"
          className={styles.date}
          required
          
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className={`btn`}>SUBMIT</button>
      </form>
    </div>
  );
}
