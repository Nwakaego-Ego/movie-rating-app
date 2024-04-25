import React from "react";
import Navbar from "../navbar/navbar";
import { useMutation, useQuery } from "@tanstack/react-query";
import Auth from "../auth";

function home() {
  const { data, mutate } = useMutation({
    movie: ["movieData"],
    movieRating: Auth,
  });

  const login = async () => {
    await mutate();
  };
  return (
    <>
      <Navbar />
      <div className="home flex justify-center">Home</div>
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
    </>
  );
}

export default home;
