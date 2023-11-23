"use client";
import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";
import PosterCard from "@/components/poster/PosterCard";
import fetchGenres from "@/lib/fetchGenres";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [ratingValue, setRatingValue] = useState(0);
  const [sorting, setSorting] = useState("popularity.desc");
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isGenreHidden, setIsGenreHidden] = useState(true);
  const searchParams = useSearchParams();

  const fetchMovies = async (page, sortBy, rating, inputGenres) => {
    setIsLoading(true);
    let genresString = inputGenres.join(",");
    if (genresString === "") {
      genresString = "all";
    }
    const data = await fetch(
      `${process.env.API_BASE_URL}/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=${page}&sort_by=${sortBy}&vote_average.gte=${rating}&with_genres=${genresString}&include_adult=false`
    ).then((res) => res.json());
    setMovies(
      data.results
        .filter((result) => result.original_language !== "ru")
        .filter((result) => result.backdrop_path && result.poster_path)
        .filter((result) => result.overview && result.overview.trim() !== "")
        .filter((result) => result.vote_average > 0)
    );
    setIsLoading(false);
  };

  const handleGenreClick = (genreId) => {
    setSelectedGenres((prevGenres) => {
      if (prevGenres.includes(genreId)) {
        return prevGenres.filter((genre) => genre !== genreId);
      } else {
        return [...prevGenres, genreId];
      }
    });
  };

  useEffect(() => {
    Promise.all([fetchGenres({ setGenres, setIsLoading })]).then(() => {
      setIsLoading(false);
    });

    const inputGenre = Number(searchParams.get("genre"));
    if (inputGenre) {
      setSelectedGenres([inputGenre]);
    }
    const inputSorting = searchParams.get("sort_by");
    if (inputSorting) {
      setSorting(inputSorting);
    }
  }, []);

  useEffect(() => {
    Promise.all([fetchMovies(page, sorting, ratingValue, selectedGenres)]).then(
      () => {
        setIsLoading(false);
      }
    );
  }, [page, ratingValue, sorting, selectedGenres]);

  return (
    <>
      <PageContainer className="gap-4 lg:pt-6 lg:gap-6 md:flex">
        <div className="flex flex-col gap-4 w-full h-full md:w-[24%] md:sticky md:top-[6.3rem]">
          <div className="grid gap-2">
            <label htmlFor="sorting" className="text-neutral-200 font-medium">
              Sorting
            </label>
            <select
              name="sorting"
              id="sorting"
              className="bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700 p-2 rounded-lg"
              onChange={(e) => setSorting(e.target.value)}
              value={sorting}
            >
              <option value="popularity.desc">Popularity</option>
              <option value="vote_count.desc">Rating</option>
              <option value="revenue.desc">Revenue</option>
            </select>
          </div>
          <div className="grid">
            <label
              htmlFor="rating"
              className="text-neutral-200 font-medium pb-2"
            >
              Rating
            </label>
            <input
              id="rating"
              type="range"
              min="0"
              max="10"
              step="1"
              value={ratingValue}
              onChange={(e) => setRatingValue(e.target.value)}
              placeholder="Rating..."
              className="cursor-pointer accent-indigo-600/70"
            />
            <p className="text-neutral-300 text-sm font-medium pt-1">
              Starting from {ratingValue}/10
            </p>
          </div>
          <div className="grid gap-2">
            <div
              className="flex justify-between items-center cursor-pointer group"
              onClick={() => setIsGenreHidden(!isGenreHidden)}
            >
              <label
                htmlFor="genres"
                className="text-neutral-200 font-medium cursor-pointer"
              >
                Genres
              </label>
              {isGenreHidden ? (
                <FaChevronUp className="text-neutral-200" />
              ) : (
                <FaChevronDown className="text-neutral-200" />
              )}
            </div>
            <div className={`grid gap-2 ${isGenreHidden ? "hidden" : ""}`}>
              {genres.map((genre) => (
                <div key={genre.id} className="flex gap-2">
                  <input
                    type="checkbox"
                    id={genre.id}
                    name={genre.name}
                    value={genre.name}
                    className="accent-indigo-600/70"
                    checked={selectedGenres.includes(genre.id)}
                    onChange={() => handleGenreClick(genre.id)}
                  />
                  <label htmlFor={genre.id} className="text-neutral-200">
                    {genre.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gap-4 lg:pt-6 grid flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
            {isLoading ? (
              <div className="h-[110vh] w-full"></div>
            ) : (
              movies.map((movie) => (
                <PosterCard
                  key={movie.id}
                  id={movie.id}
                  image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  name={movie.title}
                  release_year={movie.release_date.slice(0, 4)}
                  media_type="movie"
                  rating={movie.vote_average}
                />
              ))
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <Button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
              disabled={page === 1}
              className={`disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100`}
            >
              Back
            </Button>
            <div className="text-sm text-neutral-300 font-medium flex">
              Page {page}
            </div>
            <Button
              onClick={() => {
                if (page <= 500) {
                  setPage(page + 1);
                }
              }}
              disabled={page === 500}
              className={`disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100`}
            >
              Next
            </Button>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Catalog;
