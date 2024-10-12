import React from "react";
import { useNavigate } from "react-router-dom";

import AppNav from "../../component/AppNav/AppNav";
import styles from "./HomePage.module.css";


export default function HomePage() {
  const navigate = useNavigate();

  //navigate to form by clicking the start btn
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
