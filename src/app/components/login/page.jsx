import React from "react";
import "./login.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import Auth from "../auth";

export default function page() {
  const { data, mutate } = useMutation({
    movie: ["movieData"],
    movieRating: Auth,
  });

  const login = async () => {
    await mutate();
  };
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
