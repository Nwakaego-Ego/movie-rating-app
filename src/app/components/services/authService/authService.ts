"use client";
import axios from "axios";
// import { baseURL } from "@/app/constants";
import { baseURL } from "../../../constants";

export const createGuestSession = async () => {
  const res = await axios.get(`${baseURL}authentication/guest_session/new`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZlZWFhNDQ3M2UyYjdkZTBiNmQwY2NmODIzNTc4OCIsInN1YiI6IjY2MTQ2MjBlNTQzN2Y1MDE4NDdlNzFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPmWP9Cnp2YcpYjwmpnN1t_aMWvlna9Y-QKl_7LC87I",
    },
  });

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  // console.log("API Key:", apiKey);
  return res.data;
};
