import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../Utils/httpClient";
import { MovieCard } from "./movieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";


export function MoviesGrid() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search")

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
            ? "/search/movie?query=" + search       // aca le estamos indicacndo que se va a realizar una busqueda en especifico de la pelicula
            : "/discover/movie";                   // aca la API nos muestra en la pagina inicial y nos arroja una lista de ultimas peliculas por defecto
        get(searchUrl).then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, [search]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ul className={styles.moviesGrid}>
            {/* la funcion .map() es para convertir un arreglo, objeto en una lista li */}
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />  /* las etiquetas li se crean dimanicamente apartir del archivo movies.json */
            ))}
        </ul>
    );
}