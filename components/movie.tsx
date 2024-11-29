"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function Movie({
  id,
  title,
  poster_path,
  vote_average,
  overview,
}: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`movies/${id}`);
  };
  return (
    <div className={styles.movie} onClick={onClick}>
      <div className={styles.card}>
        <div className={styles.front}>
          <img src={poster_path} alt={title} />
        </div>
        <div className={styles.back}>
          <div>
            <div>
              <h6>{title}</h6>
              <h3>⭐️ {vote_average.toFixed(1)}</h3>
              <p>{overview}</p>
            </div>
            <Link prefetch href={`movies/${id}`}>
              Show detail &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
