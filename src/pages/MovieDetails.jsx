import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../Utils/httpClient";
import styles from "./MovieDetails.module.css";

// esta funcion me carga los detalles de la peliculas con el identidicador
export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);  // esta constante nos va a cargar el loader que nos dice que esta cargando la pelicula
  const [movie, setMovie] = useState(null);


  // este useEffect lo que hace es una llamda asincrona para traernos la pelicula que tenga el idetificador movieId de la pelicula
  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
      
    });
  }, [movieId]);

  if (isLoading) {                   // con esta condicion le estoy diciendo que cuando este cargango la pelicula me carge e loader 
    return <Spinner />;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}