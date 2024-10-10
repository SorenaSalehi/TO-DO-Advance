import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./AppNav.module.css";

export default function AppNav() {
  const [isHidden, setIsHidden] = useState(true);

  function handleSidebar() {
    setIsHidden((hidden) => !hidden);
  }

  return (
    <>
      <button className={styles.sidebarBtn} onClick={handleSidebar}>
        <FontAwesomeIcon className={styles.sidebar} icon={faBars} />
      </button>
      <nav className={isHidden ? styles.hidden : styles.AppNav}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img loading="lazy" alt="todo-logo" src="/logo.webp"></img>
          </NavLink>
        </div>
        <ul>
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
    </>
  );
}
