import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import styles from "../STYLES/AuthCard.module.css";

const Login = () => (
  <div
    style={{
      minHeight: "100vh",
      //background: "linear-gradient(135deg, #2563eb 0%, #6aa9f0 50%, #e9f0f8 100%)",
      backgroundColor: "#c6ebbe",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Outer flex container holding both cards */}
    <div

  style={{
    display: "flex",
    alignItems: "stretch", // make both cards the same height
    justifyContent: "flex-start", // remove gap between them
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
      {/* RIGHT: Image card */}
<div className="relative w-1/2 rounded-r-2xl overflow-hidden" style={{ 
    minHeight: "100%",
  }}>

  {/* Background image */}
  <img
  src="/images/try.png"
  alt="Building"
  className="absolute inset-0 w-full h-full object-cover"
/>
         {/* Optional: Dark overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/20"></div>
    
    {/* Content overlay - properly centered */}
    <div 
      className="relative z-10" 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "2rem"
      }}
    >
      <img 
        src="/images/AOSlogo(main).svg" 
        alt="Logo" 
        style={{ height: 120 }} 
      />
      <h2
        style={{
          fontSize: "1.8rem",
        marginTop: "1rem",
        textAlign: "center",
        color: "#ffffff",
        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
        fontWeight: "600",
        }}
      >
        Artificial Intelligence <br />
        Driving Results For The Travel Industry
      </h2>
    </div>
  </div>
</div>
</div>
);

export default Login;
