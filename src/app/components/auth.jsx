// export const createGuest = async () => {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/authentication/guest_session/new",
//     {
//       header: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZlZWFhNDQ3M2UyYjdkZTBiNmQwY2NmODIzNTc4OCIsInN1YiI6IjY2MTQ2MjBlNTQzN2Y1MDE4NDdlNzFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPmWP9Cnp2YcpYjwmpnN1t_aMWvlna9Y-QKl_7LC87I",
//       },
//     }
//   );

//   console.log(response.json);

//   return response.json;
// };

// export const popularMovies = async () => {
//   const res = await fetch(
//     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
//     {
//       header: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZlZWFhNDQ3M2UyYjdkZTBiNmQwY2NmODIzNTc4OCIsInN1YiI6IjY2MTQ2MjBlNTQzN2Y1MDE4NDdlNzFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPmWP9Cnp2YcpYjwmpnN1t_aMWvlna9Y-QKl_7LC87I",
//       },
//     }
//   );

//   console.log(res.json);

//   return res.json;
// };

export const createGuestSession = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/authentication/guest_session/new",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZlZWFhNDQ3M2UyYjdkZTBiNmQwY2NmODIzNTc4OCIsInN1YiI6IjY2MTQ2MjBlNTQzN2Y1MDE4NDdlNzFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPmWP9Cnp2YcpYjwmpnN1t_aMWvlna9Y-QKl_7LC87I",
      },
    }
  );

  const data = await response.json();
  return data;
};

export const popularMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmZlZWFhNDQ3M2UyYjdkZTBiNmQwY2NmODIzNTc4OCIsInN1YiI6IjY2MTQ2MjBlNTQzN2Y1MDE4NDdlNzFmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QPmWP9Cnp2YcpYjwmpnN1t_aMWvlna9Y-QKl_7LC87I",
      },
    }
  );

  const data = await response.json();
  return data;
};
