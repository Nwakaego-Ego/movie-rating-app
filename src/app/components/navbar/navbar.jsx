import React from "react";
import Link from "next/link";
import "./navbar.css";

const navbar = () => {
  return (
    <>
      <div className="">
        <div className="home-rated">
          <Link href="/" className="home">
            Home
          </Link>
          <Link href="/components/rated" className="rated">
            Rated
          </Link>
        </div>
        <div className="flex justify-end">
          {" "}
          <Link href="/components/auth" className="auth">
            Auth
          </Link>
        </div>
      </div>
    </>
  );
};

export default navbar;

// 6bfeeaa4473e2b7de0b6d0ccf8235788
