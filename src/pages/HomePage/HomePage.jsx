import React from "react";
import AppNav from "../../component/AppNav/AppNav";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  //navigate to form
  function handleStart() {
    navigate("form");
  }

  return (
    <>
      <main className={styles.homePage}>
        <AppNav />
      
        <h1>TODO HOME</h1>
        <button className={`btn`} onClick={handleStart}>
          GET STARTED
        </button>
        <footer>
          <p>
            © 2024{" "}
            <a href="https://www.linkedin.com/in/sorenasalehi/">
              SORENA SALEHI
            </a>
            . All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
