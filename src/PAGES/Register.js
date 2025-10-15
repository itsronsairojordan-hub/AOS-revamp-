import React from "react";
import styles from "../STYLES/AuthCard.module.css";

const Register = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #2563eb 0%, #6aa9f0 50%, #e9f0f8 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // 🔑 adds space between the two cards so they don’t overlap
      }}
    >
      {/* LEFT: Login card (keep your original sizing/fonts here) */}
      <div className={styles.Regtrans}>
        <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: "2", borderRadius: "1.5rem"}}>
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
        <a href="/login" className={styles.link}>Sign In</a>
      </div>
      </div>
    </div>
        </div>
      </div>
    </div>
);

export default Register;