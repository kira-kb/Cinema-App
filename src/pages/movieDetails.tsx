import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import ErrorPage from "../components/errorDisplay";
import { LoadingSpinner } from "../components/loadingAnimation";
import NoContentPage from "../components/noContent";
import { useTitle } from "../components/useTitle";

interface MovieListProb {
  url: string;
}

interface MovieData {
  homepage?: string;
  original_title: string;
  title?: string;
  release_date: string;
  revenue: number;
  runtime: number;
  imdb_id: string;
  genres?: [{ id: number; name: string }];
  poster_path: string;
  backdrop_path?: string;
  vote_average: number;
  vote_count: number;
  status?: string;
  popularity?: number;
  overview: string;
  budget: number;
  tagline?: string;
}

export const MovieDetails: React.FC<MovieListProb> = ({ url }) => {
  const { id } = useParams();
  const finder = url.replace("{MOVIE_ID}", id || "");
  const [movie, isLoading, error] = useFetch<MovieData>(finder);
  useTitle(movie?.original_title || "Movie Details");

  if (isLoading) return <LoadingSpinner />;
  if (error || !movie) return <ErrorPage />;
  // console.log(movies);
  if (!movie.original_title)
    return <NoContentPage name={id ? id : movie.original_title} />;

  return (
    <main>
      <section className="flex gap-10 justify-center flex-wrap py-5">
        <div className="max-w-sm">
          <a
            href={movie.homepage ? movie.homepage : "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://placehold.co/500x750"
              }
              alt={movie.original_title}
              className="rounded"
            />
          </a>
        </div>
        <div className="flex flex-col gap-3 p-4 leading-normal max-w-lg">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.original_title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">
            {movie.overview}
          </p>

          {/* GENERS */}
          <div className="flex flex-row gap-4 flex-wrap">
            {movie.genres?.map((gener) => (
              <div
                key={gener.id}
                className="border-2 rounded text-nowrap border-gray-500 text-gray-700 dark:text-gray-200 px-4 py-2"
              >
                {`🏷️${gener.name}`}
              </div>
            ))}
          </div>

          <div className="text-gray-700 dark:text-gray-200 flex flex-col gap-4">
            <div>
              ⭐ {movie.vote_average} <span>-</span> {movie.vote_count} reviews
            </div>

            <div>
              <span className="font-bold">Runtime:</span> {movie.runtime} min.
            </div>
            <div>
              <span className="font-bold">Budget:</span> {movie.budget}.
            </div>
            <div>
              <span className="font-bold">Status:</span> {movie.status}.
            </div>
            <div>
              <span className="font-bold">Revenue:</span> {movie.revenue}.
            </div>
            <div>
              <span className="font-bold">Release Date: </span>{" "}
              {movie.release_date}.
            </div>
            <div>
              <span className="font-bold">IMDB Code:</span> {movie.imdb_id}.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// img=
