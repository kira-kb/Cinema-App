import { Route, Routes } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound } from "../pages";
// import { useState } from "react";

const VITE_API_SEARCH: string = import.meta.env.VITE_API_SEARCH;
const VITE_API_INDIVIDUAL: string = import.meta.env.VITE_API_INDIVIDUAL;
const VITE_API_POPULAR: string = import.meta.env.VITE_API_POPULAR;
const VITE_API_TOP_RATED: string = import.meta.env.VITE_API_TOP_RATED;
const VITE_API_UPCOMING: string = import.meta.env.VITE_API_UPCOMING;
const VITE_API_NOW_PLAYING: string = import.meta.env.VITE_API_NOW_PLAYING;

interface SearchProb {
  searchParam: string;
  setSearch: (param: string) => void;
}

const AllRoutes: React.FC<SearchProb> = ({ searchParam, setSearch }) => {
  // const [page, setPage] = useState<number>(1);
  // console.log(page);
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <MovieList
            setSearch={setSearch}
            searchParam={searchParam}
            url={
              searchParam.length > 0
                ? VITE_API_SEARCH.replace("{SEARCH_PARAM}", searchParam)
                : VITE_API_NOW_PLAYING
            }
          />
        }
      />
      <Route
        path={"/page/:page"}
        element={
          <MovieList
            setSearch={setSearch}
            searchParam={searchParam}
            url={
              searchParam.length > 0
                ? VITE_API_SEARCH.replace("{SEARCH_PARAM}", searchParam)
                : `${VITE_API_NOW_PLAYING}$page=${2}`
            }
          />
        }
      />
      <Route
        path="/movie/:id"
        element={
          searchParam.length > 0 ? (
            <MovieList
              setSearch={setSearch}
              searchParam={searchParam}
              url={VITE_API_SEARCH.replace("{SEARCH_PARAM}", searchParam)}
            />
          ) : (
            <MovieDetails url={VITE_API_INDIVIDUAL} />
          )
        }
      />
      <Route
        path="/movies/popular"
        element={
          <MovieList
            setSearch={setSearch}
            searchParam={searchParam}
            url={
              searchParam.length > 0
                ? VITE_API_SEARCH.replace("{SEARCH_PARAM}", searchParam)
                : VITE_API_POPULAR
            }
          />
        }
      />
      <Route
        path="/movies/top"
        element={
          <MovieList
            setSearch={setSearch}
            searchParam={searchParam}
            url={
              searchParam.length > 0
                ? VITE_API_SEARCH.replace("{SEARCH_PARAM}", searchParam)
                : VITE_API_TOP_RATED
            }
          />
        }
      />
      <Route
        path="/movies/upcoming"
        element={
          <MovieList
            setSearch={setSearch}
            searchParam={searchParam}
            url={
              searchParam.length > 0
                ? VITE_API_SEARCH.replace("{SEARCH_PARAM}", searchParam)
                : VITE_API_UPCOMING
            }
          />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
