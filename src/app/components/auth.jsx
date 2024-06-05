export const createUser = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      header: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZlZWFhNDQ3M2UyYjdkZTBiNmQwY2NmODIzNTc4OCIsInN1YiI6IjY2MTQ2MjBlNTQzN2Y1MDE4NDdlNzFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPmWP9Cnp2YcpYjwmpnN1t_aMWvlna9Y-QKl_7LC87I",
      },
    }
  );

  console.log(response.json);

  return response.json;
};

// import Dashboard from "../components/dashboard/dashboard";

// export const createUser = async () => {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/authentication/guest_session/new",
//     {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZlZWFhNDQ3M2UyYjdkZTBiNmQwY2NmODIzNTc4OCIsInN1YiI6IjY2MTQ2MjBlNTQzN2Y1MDE4NDdlNzFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPmWP9Cnp2YcpYjwmpnN1t_aMWvlna9Y-QKl_7LC87I",
//       },
//     }
//   );

//   return (
//     <>
//     <div>
//       <Dashboard data={data}/>
//     </div>
//     </>
//   )
// };
