import React from "react";

import styles from "./FinishedItem.module.css";
import DeleteTaskBtn from "../../component/DeleteTaskBtn/DeleteTaskBtn";


export default function FinishedItem({ task }) {

  const date = task.date.replaceAll('-','/')
  
  return (
    <div className={styles.container}>
      <h1 className={styles.task}>{task.task}</h1>
      <h1 className={styles.date}>{date}</h1>
      <DeleteTaskBtn id={task.id} />
    </div>
  );
}
