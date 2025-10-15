import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import styles from "../STYLES/AuthCard.module.css";

const Login = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #2563eb 0%, #6aa9f0 50%, #e9f0f8 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Outer flex container holding both cards */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // 🔑 adds space between the two cards so they don’t overlap
      }}
    >
      {/* LEFT: Login card (keep your original sizing/fonts here) */}
      <div className={styles.transparenCard}>
        <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: "2",}}>
          <img
            src="/images/AOSlogo(sub).svg"
            alt="Logo"
            style={{ height: 60, marginBottom: "1rem" }}
          />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className={styles.subtitle}
        >
          Welcome Back! Please enter your details.
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.95rem",
            }}
          >
            <label>
              <input type="checkbox" style={{ marginRight: 6 }} /> Remember Me
            </label>
            <span className={styles.link}>Forgot Password?</span>
          </div>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={styles.button}
            type="submit">
            Login
          </button>
        </form>

        <div className={styles.switch}>
          Don’t have an account? <a href="/register" className={styles.link}>Sign Up</a>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            color: "#64748b",
          }}
        >
          Or login with
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "0.5rem",
          }}
        >
          <a
            href="https://www.facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaGoogle size={24} />
          </a>
        </div>
      </div>

      {/* RIGHT: Glass card */}
      <div
        style={{
          borderRadius: "0 1.5rem 1.5rem 0",
          height: "645px",
          width: "450px",
          background: "rgba(255, 255, 255, 0.54)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          boxShadow: "10px 0 35.px rgba(0,0,0,0.20)",  
        }}
      >
        <img src="/images/AOSlogo(main).svg" alt="Logo" style={{ height: 120 }} />
        <h2
          style={{
            fontSize: "1.8rem",
            marginTop: "1rem",
            textAlign: "center",
            color: "#0f172a",
          }}
        >
          Artificial Intelligence <br />
          Driving Results For The Travel Industry
        </h2>
      </div>
    </div>
  </div>
);

export default Login;
