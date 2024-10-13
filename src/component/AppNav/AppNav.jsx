import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "./AppNav.module.css";
import { useTodo } from "../../Context/TodoContext";

export default function AppNav() {
  const { isSidebarHidden, dispatch } = useTodo();
  const [width, setWidth] = useState(window.innerWidth);

  //set width on mount
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const barsIco = useMemo(
    () => <FontAwesomeIcon className={styles.sidebar} icon={faBars} />,
    []
  );
  const homeIco = useMemo(() => <FontAwesomeIcon icon={faHouse} />, []);
  const addIco = useMemo(() => <FontAwesomeIcon icon={faPen} />, []);
  const taskIco = useMemo(() => <FontAwesomeIcon icon={faList} />, []);
  const finishedIco = useMemo(
    () => <FontAwesomeIcon icon={faSquareCheck} />,
    []
  );

  //for sidebar display
  const phoneScreen = width <= 450;

  //handling sidebar
  function handleSidebar() {
    dispatch({ type: "sidebarBtnEvent" });
  }

  return (
    <>
      <button className={styles.sidebarBtn} onClick={handleSidebar}>
        {barsIco}
      </button>

      <nav
        //display the sidebar on screen
        className={
          !phoneScreen
            ? styles.AppNav
            : isSidebarHidden
            ? styles.hidden
            : styles.AppNav
        }
        //for closing sidebar b click outside
        onClick={() => dispatch({ type: "closeSidebar" })}
      >
        <div className={styles.logo}>
          <NavLink to="/">
            HOME
            <span>{homeIco}</span>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/form">
              Add Task <span>{addIco}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks">
              Tasks
              <span>{taskIco}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/finished">
              Finished
              <span>{finishedIco}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
