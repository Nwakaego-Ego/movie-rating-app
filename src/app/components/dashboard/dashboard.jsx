// import React, { useEffect } from "react";
// import Navbar from "../navbar/navbar";
// import { useQuery, useMutation } from "@tanstack/react-query";
// import { createGuestSession } from "../services/authService/authService";

// export default function () {
//   const { data, isLoading, error, refetch } = useQuery({
//     queryKey: ["movieData"],
//     queryFn: () => createGuestSession(),
//     enabled: false,
//     onSuccess: (data) => {
//       console.log(data);
//       localStorage.setItem(`guest`, data?.data?.guest_session_id);
//     },
//   });

//   console.log(data);

//   const guestSession = () => {
//     refetch();
//     //  sessionStorage.setItem(`guest`, data?.guest_session_id);
//   };

//   useEffect(() => {
//     if (data && data?.data?.guest_session_id) {
//       sessionStorage.setItem("guest", data?.data?.guest_session_id);
//     }
//     console.log("useEffect hook is triggered");
//   }, [data]);

//   console.log(sessionStorage.getItem("guest"));

//   return (
//     <>
//       <Navbar />
//       <div className="home flex justify-center">Home</div>
//       <div className="auth-main">
//         <div className="greeting">
//           Welcome! Login by registering as a{" "}
//           <span className="guest">Guest below</span>
//         </div>
//         <div>
//           <button className="auth-login">
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//           <div>
//             {/* <button onClick={() => refetch()}>Login as Guest</button> */}
//             <button onClick={guestSession} disabled={isLoading}>
//               {isLoading ? "1...2...3" : "Login as Guest"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useEffect } from "react";
// import Navbar from "../navbar/navbar";
// import { useQuery, useMutation } from "@tanstack/react-query";
// import { createGuestSession } from "../services/authService/authService";

// export default function dashboard() {
//   const { data, isLoading, error, refetch } = useQuery({
//     queryKey: ["movieData"],
//     queryFn: () => createGuestSession(),
//     enabled: false,
//   });

//   useEffect(() => {
//     if (data && data?.data?.guest_session_id) {
//       sessionStorage.setItem("guest", data?.data?.guest_session_id);
//     }
//     console.log(data);
//     console.log("useEffect hook is triggered");
//   }, [isLoading]);

//   const guestSession = async () => {
//     const fetchedData = await createGuestSession();
//     if (fetchedData && fetchedData.data && fetchedData.data.guest_session_id) {
//       sessionStorage.setItem("guest", fetchedData.data.guest_session_id);
//     }
//     refetch();
//   };

//   console.log(sessionStorage.getItem("guest"));

//   return (
//     <>
//       <Navbar />
//       <div className="home flex justify-center">Home</div>
//       <div className="auth-main">
//         <div className="greeting">
//           Welcome! Login by registering as a{" "}
//           <span className="guest">Guest below</span>
//         </div>
//         <div>
//           <button className="auth-login">
//             {isLoading ? "Logging in..." : "Login"}
//           </button>
//           <div>
//             <button onClick={guestSession} disabled={isLoading}>
//               {isLoading ? "1...2...3" : "Login as Guest"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import React, { useEffect } from "react";
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
            <button onClick={guestSession} disabled={isLoading}>
              {isLoading ? "1...2...3" : "Login as Guest"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
