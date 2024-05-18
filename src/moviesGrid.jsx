import { MovieCard } from "./components/movieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
    return (
        <ul className={styles.moviesGrid}>
            {/* la funcion .map() es para convertir un arreglo, objeto en una lista li */}
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />  /* las etiquetas li se crean dimanicamente apartir del archivo movies.json */
            ))}
        </ul>
    );
}