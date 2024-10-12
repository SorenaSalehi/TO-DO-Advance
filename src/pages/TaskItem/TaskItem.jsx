import React from "react";
import { Link } from "react-router-dom";

import styles from "./TaskItem.module.css";
import FinishedTaskBtn from "../../component/FinishedTaskBtn/FinishedTaskBtn";
import DeleteTaskBtn from "../../component/DeleteTaskBtn/DeleteTaskBtn";


export default function TaskItem({ task }) {

  const date = task.date.replaceAll("-", "/");
  const finished =task.isFinished


  return (
    <div className={styles.container}>
      {/* //finished popup */}
      <p className={finished ? styles.finishedPopup : styles.hide}>Finished 🙂</p>
      <h1 className={styles.task}>{task.task}</h1>

      {/* //desc is optional */}
      {task.description && <h1 className={styles.description}>{task.description}</h1>}
      <h1 className={styles.date}>{date}</h1>

      {/* //task finished btn  */}
      {task.isFinished && (
        <button className={styles.GoToFinished}>
          <Link to="/finished">finished page &rarr;</Link>
        </button>
      )}
      
      {/* //delete or check task btn */}
      <div className={styles.btnsContainer}>
        {!task.isFinished && <FinishedTaskBtn task={task} />}
        <DeleteTaskBtn id={task.id} />
      </div>
    </div>
  );
}
