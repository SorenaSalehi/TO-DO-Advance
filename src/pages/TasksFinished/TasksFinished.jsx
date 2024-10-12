import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTodo } from "../../Context/TodoContext";
import AppNav from "../../component/AppNav/AppNav";
import FinishedItem from "../FinishedItem/FinishedItem";
import styles from "./TasksFinished.module.css";


export default function TasksFinished() {

  const { finishedTasks, isLoading, dispatch, handleLoading } = useTodo();

  useEffect(() => {
    dispatch({ type: "loading" });
  }, []);

  return (
    <div className={styles.finishedPage}>
      <AppNav />
      <div className={styles.finishedContainer}>
        <picture>
          {/* //phone bg  */}
          <source
            className={styles.finishedBg}
            media="(max-width:450px)"
            srcSet="/finished-vertical.webp"
            alt="task-background"
            loading="lazy"
          />
          {/* //desktop bg  */}
          <img
            className={styles.finishedBg}
            src={
              isLoading ? "/tasks-finished-low.jpg" : "/tasks-finished-hd.webp"
            }
            alt="task"
            loading="lazy"
            onLoad={handleLoading}
          />
        </picture>
        {/* //task number */}
        <div className={styles.finished}>
          {finishedTasks.length !== 0 && (
            <h1 className={styles.finishedNum}>
              You finished <span>{finishedTasks.length}</span> tasks
            </h1>
          )}

          {/* //in case no finished  */}
          {finishedTasks.length === 0 && (
            <>
              <h1 className={styles.finishedNum}>NO TASKS FINISHED</h1>
              <button className={`btn ${styles.startBtn}`}>
                <Link to="/form">Add Task</Link>
              </button>
            </>
          )}

          {/* //finished list  */}
          <div className={styles.finishedList}>
            {finishedTasks.map((task) => (
              <FinishedItem task={task} key={task.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
