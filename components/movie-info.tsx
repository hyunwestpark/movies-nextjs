import { API_URL } from "../constants";
import styles from "../styles/movie-info.module.css";

interface MovieInfoProps {
  id: string;
}

export async function getMovie(id: string) {
  console.log(`fetching videos: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: MovieInfoProps) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>{movie.title}</h1>
          <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        </div>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
