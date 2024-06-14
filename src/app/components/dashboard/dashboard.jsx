"use client";
import React, { useEffect } from "react";
import "./dashboard.css";
import Navbar from "../navbar/navbar";
import { useQuery, useMutation } from "@tanstack/react-query";
import { createGuestSession } from "../services/authService/authService";

export default function Dashboard() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["movieData"],
    queryFn: createGuestSession,
    enabled: false,
  });

  useEffect(() => {
    if (window !== "undefined" && data && data.guest_session_id) {
      window.sessionStorage.setItem("guest", data.guest_session_id);
      console.log(
        "Guest session ID stored in session storage:",
        data.guest_session_id
      );
    }
    console.log(data);
  }, [data]);

  const guestSession = async () => {
    const fetchedData = await createGuestSession();
    if (fetchedData && fetchedData.data && fetchedData.data.guest_session_id) {
      sessionStorage.setItem("guest", fetchedData.data.guest_session_id);
      console.log(
        "Guest session ID stored in session storage:",
        fetchedData.data.guest_session_id
      );
    }
    refetch();
  };

  console.log(
    "Current guest session ID in session storage:",
    sessionStorage.getItem("guest")
  );

  return (
    <>
      <Navbar />
      <div className="home flex justify-center">Home</div>
      <div className="auth-main">
        <div className="greeting">
          Welcome! Login by registering as a{" "}
          <span className="guest">Guest below</span>
        </div>
        <div>
          <button className="auth-login">
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <div>
            <button
              onClick={guestSession}
              disabled={isLoading}
              style={{ backgroundColor: isLoading ? "blue" : "yellow" }}
            >
              {isLoading ? "1...2...3 " : "Login as Guest "}
            </button>
          </div>
          <div>
            <button className="styled-button">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
