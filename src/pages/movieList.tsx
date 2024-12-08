import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { LoadingSpinner } from "../components/loadingAnimation";
import ErrorPage from "../components/errorDisplay";
import useFetch from "../components/useFetch";
import NoContentPage from "../components/noContent";
import { useTitle } from "../components/useTitle";

interface ResultData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieData {
  name?: string; //if ? it is optional
  image?: string;
  description?: string;
  id?: string | number;
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: ResultData[];
  total_pages: number;
  total_results: number;
}

interface MovieListProb {
  url: string;
  searchParam: string;
  setSearch: (param: string) => void;
}

export const MovieList: React.FC<MovieListProb> = ({
  url,
  searchParam,
  setSearch,
}) => {
  const [data, loading, errors] = useFetch<MovieData>(url);
  const [movies, setMovies] = useState<MovieData | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(loading);
  const [error, setError] = useState<boolean>(errors);

  useTitle("Cinema App");

  useEffect(() => {
    setLoading(true);
  }, [url]);

  useEffect(() => {
    setMovies(data);
    setLoading(loading);
    setError(errors);
  }, [data, loading, errors]);

  if (isLoading) return <LoadingSpinner />;
  if (error || !movies) return <ErrorPage />;
  // console.log(movies);
  if (!(movies.results.length > 0)) return <NoContentPage name={searchParam} />;

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex sm:justify-start ns:justify-evenly flex-wrap gap-3">
          {movies.results.map((movie) => (
            <Card
              setSearch={setSearch}
              key={movie.id}
              id={movie.id}
              img={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://placehold.co/500x750"
              }
              name={movie.original_title}
              description={movie.overview}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

{
  /* <Card
  img={"https://flowbite.com/docs/images/blog/image-1.jpg"}
  name="kira"
  description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
/>; */
}
