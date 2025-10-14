import React from "react";
import styles from "../STYLES/AuthCard.module.css";

const Login = () => (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#5d8aebff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className={styles.transparenCard}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/images/AOSlogo(main).svg" alt="Logo" style={{ height: 85 }} />
      </div>
      <div style={{ display: "flex", textAlign: "center", }} className={styles.subtitle}>
        Artificial Intelligence Driving Results For The Travel Industry
      </div>
      <form>
        <input
          className={styles.input}
          type="email"
          placeholder="Email Address"
          autoComplete="username"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.95rem" }}>
          <label>
            <input type="checkbox" style={{ marginRight: 6 }} /> Remember Me
          </label>
          <span className={styles.link}>Forgot Password?</span>
        </div>
        <button style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}} className={styles.button} type="submit">
          Login
        </button>
      </form>
      <div className={styles.switch}>
        Don’t have an account?{" "}
        <span className={styles.link}>Register</span>
      </div>
      <div style={{ textAlign: "center", marginTop: "1.5rem", color: "#64748b" }}>
        Or login with
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "0.5rem" }}>
        <span className={styles.link}>Facebook</span>
        <span className={styles.link}>LinkedIn</span>
        <span className={styles.link}>Google</span>
      </div>
    </div>
  </div>
);

export default Login;