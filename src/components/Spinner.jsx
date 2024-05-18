import { FaSpinner } from "react-icons/fa";  // se importa el icono de la libreria react-icons
import styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60} />
        </div>
    )
}
