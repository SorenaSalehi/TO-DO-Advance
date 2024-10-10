import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { useTodo } from "../../Context/TodoContext";

export default function AppNav() {


  return (
    <nav className={styles.AppNav}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img loading="lazy" alt="todo-logo" src="/logo.webp"></img>
        </NavLink>
      </div>
      <ul>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/form">Add Task</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Finished</NavLink>
        </li>
      </ul>
    </nav>
  );
}
