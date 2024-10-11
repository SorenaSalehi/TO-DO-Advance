import React, { useEffect } from "react";

import styles from "./Layout.module.css";
import { useTodo } from "../../Context/TodoContext";

export default function Layout({ children }) {
  const { isLoading, dispatch, isSidebarHidden, handleLoading } = useTodo();

  useEffect(() => {
    dispatch({ type: "loading" });
  }, []);

  return (
    <div
      className={styles.layout}
      onClick={(e) =>
        e.target.className !== "_AppNav_1cr1e_5" &&
        !isSidebarHidden &&
        dispatch({ type: "closeSidebar" })
      }
    >
      {/* //responsive bg */}
      <picture>
        <source
          media="(max-width : 450px)"
          srcSet="/vertical.webp"
          alt="todo-background"
          loading="lazy"
        />
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
