import React from "react";
import "./login.css";

export default function page() {
  return (
    <>
      <div className="auth-main">
        <div className="greeting">
          Welcome ! Login by registering as a{" "}
          <span className="guest">Guest below</span>
        </div>
        <div>
          <button className="auth-login" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
