const API = "https://api.themoviedb.org/3";       // aca es donde se le pasa lña API al proyecto 

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:  // aca se solicita el token a la APi para ver las  tarjetas, imagen de cada pelicula
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTlhZTRjMWZmZGE2NDlhNGNhYWE4YTYxMmZiMTNmYyIsInN1YiI6IjY2NDIyZGY1ZmIxYTAxOTAxY2ZmZWRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SWnalj0vk8ttrOHGwCt2eFC3zLBhhBLeQ_pU72yr2Ro",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());  // combierto el resultado de la API en un archivo json para utilizarlo
}