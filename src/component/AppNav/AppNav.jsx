import React, { useEffect, useState } from "react";
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
  // const [isHidden, setIsHidden] = useState(true);
  const { isSidebarHidden, dispatch } = useTodo();

  const [width, setWidth] = useState(window.innerWidth);

  const phoneScreen = width <= 450;
  console.log(width, phoneScreen);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function handleSidebar() {
    // setIsHidden((hidden) => !hidden);
    dispatch({ type: "sidebarBtnEvent" });
  }

  return (
    <>
      <button className={styles.sidebarBtn} onClick={handleSidebar}>
        <FontAwesomeIcon className={styles.sidebar} icon={faBars} />
      </button>
      <nav
        className={
          !phoneScreen
            ? styles.AppNav
            : isSidebarHidden
            ? styles.hidden
            : styles.AppNav
        }
        onClick={() => dispatch({type:"closeSidebar"})}
      >
        <div className={styles.logo}>
          <NavLink to="/">
            HOME
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/form">
              Add Task{" "}
              <span>
                <FontAwesomeIcon icon={faPen} />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks">
              Tasks
              <span>
                <FontAwesomeIcon icon={faList} />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/finished">
              Finished
              <span>
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
