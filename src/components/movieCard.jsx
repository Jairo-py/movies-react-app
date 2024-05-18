import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./MovieCard.module.css"

export function MovieCard({movie}) {
    const imageUrl = "https:image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>  {/*  aca le digo que vaya a movie  y me traiga el identificador de la pelicula*/}
                <img 
                    width={230}
                    height={345}
                    className={styles.movieImage} 
                    src={imageUrl} 
                    alt="move.title"
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}