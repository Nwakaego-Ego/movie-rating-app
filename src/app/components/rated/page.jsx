"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function page() {
  const { isLoading, error } = useQuery({
    movie: ["movieData"],
    movieRating: rateMovie,
  });

  const rateMovie = () => {
    console.log("PG17");
  };

  return (
    <>
      <div>Rated</div>
      <button onClick={rateMovie}>Rate now</button>
    </>
  );
}
