import React from "react";
import styles from "../STYLES/AuthCard.module.css";

const Register = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(120deg, #e0e7ff 0%, #2563eb 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className={styles.transparentCard}>
      <div className={styles.title}>Register</div>
      <div className={styles.subtitle}>
        Create your account to get started
      </div>
      <form>
        <input
          className={styles.input}
          type="text"
          placeholder="Full Name"
          autoComplete="name"
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email Address"
          autoComplete="email"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          autoComplete="new-password"
        />
        <select className={styles.input} defaultValue="">
          <option value="" disabled>
            Select Role
          </option>
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
        </select>
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
      <div className={styles.switch}>
        Already have an account?{" "}
        <span className={styles.link}>Login</span>
      </div>
    </div>
  </div>
);

export default Register;