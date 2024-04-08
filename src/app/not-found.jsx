import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you've taken a wrong turn.</p>
      <p>Let's get you back on track:</p>
      <ul>
        <li>
          <Link href="/">Back to Dashboard....</Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
