
import { MoviesGrid } from "../components/moviesGrid";
import { Search } from "../components/Search";

export function LandingPage() {
    return (
        <div>
            <Search />      {/* este es el componente de la busqueda de peliculas  en la pagina  */}
            <MoviesGrid />  {/*  y este es el componente de la grilla de pelicupas donde nos aparecen todas en la pagina inicial */}
        </div>
    )
}