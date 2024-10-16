import React, { useEffect } from "react";

import styles from "./Layout.module.css";
import { useTodo } from "../../Context/TodoContext";
import AppNav from "../../component/AppNav/AppNav";

export default function Layout({ children }) {
  const { isLoading, dispatch, isSidebarHidden,phoneScreen, handleLoading } = useTodo();

  //on page mount
  useEffect(() => {
    dispatch({ type: "loading" });
  }, []);



  return (
    <div
      className={styles.layout}
      //for closing sidebar if it open
      onClick={(e) => {
        e.target.className !== "_AppNav_1cr1e_5" &&
          !isSidebarHidden && phoneScreen &&
          dispatch({ type: "closeSidebar" });
      }}
    >
      <nav className={styles.nav}>
        <AppNav />
      </nav>
      {/* //responsive bg */}
      <picture>
        {/* //phone bg */}
        <source
          media="(max-width : 450px)"
          srcSet="/vertical.webp"
          alt="todo-background"
          loading="lazy"
        />
        {/* //desktop */}
        <img
          className={styles.layoutBg}
          src={isLoading ? "/main-low.webp" : "/main-bg.webp"}
          alt="todo-background"
          loading="lazy"
          onLoad={handleLoading}
        />

        {children}
      </picture>
    </div>
  );
}
