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
