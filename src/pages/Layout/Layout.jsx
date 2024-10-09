import React, { useEffect } from "react";

import styles from "./Layout.module.css";
import { useTodo } from "../../Context/TodoContext";

export default function Layout({ children }) {
  const { isLoading, dispatch, handleLoading } = useTodo();

  useEffect(() => {
    dispatch({ type: "loading" });
  }, []);

  return (
    <div className={styles.layout}>
      <img
        className={styles.layoutBg}
        src={isLoading ? "/main.low.jpg" : "/main.bg.jpg"}
        alt="todo-background"
        loading="lazy"
        onLoad={handleLoading}
      />

      {children}
    </div>
  );
}
