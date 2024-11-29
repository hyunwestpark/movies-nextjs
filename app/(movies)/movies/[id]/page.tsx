import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import Spinner from "../../../../components/spinner";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params, searchParams }) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
