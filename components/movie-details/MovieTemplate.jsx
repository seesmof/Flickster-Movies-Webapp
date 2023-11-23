"use client";
import { useEffect } from "react";
import Link from "next/link";
import PosterCard from "../poster/PosterCard";
import { useState } from "react";
import PageContainer from "../PageContainer";

const MovieTemplate = ({
  name,
  description,
  year,
  runtime,
  rating,
  image,
  backdrop,
  genres,
  id,
  imdbId,
}) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  const fetchSimilarMovies = async () => {
    const data = await fetch(
      `${process.env.API_BASE_URL}/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json());
    setSimilarMovies(
      data.results
        .filter((result) => result.original_language !== "ru")
        .filter((result) => result.backdrop_path && result.poster_path)
        .filter((result) => result.overview && result.overview.trim() !== "")
        .filter((result) => result.vote_average > 0)
        .slice(0, 4)
    );
  };

  useEffect(() => {
    fetchSimilarMovies();
  }, []);

  return (
    <>
      <PageContainer>
        <img
          src={backdrop}
          alt="Movie backdrop"
          className="w-full max-h-96 object-cover rounded-xl"
          loading="lazy"
        />
        <div className="grid gap-4 lg:gap-6 xl:gap-8 md:flex pt-4 lg:pt-6">
          <img
            src={image}
            alt="Movie poster"
            className="w-full hidden md:block max-w-sm max-h-[60vh] object-cover rounded-xl"
            loading="lazy"
          />
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-3">
              <p>{genres[0].name}</p>
              <p className="text-indigo-500 scale-90">•</p>
              <p>{year}</p>
            </div>
            <div className="flex items-center justify-between pb-4 pt-2 md:pt-1 gap-4">
              <h1 className="font-bold lg:text-4xl md:text-2xl text-xl text-neutral-50">
                {name}
              </h1>
              <p
                className={`text-neutral-50 font-medium rounded-xl p-1 px-4 ${
                  rating >= 8
                    ? "bg-green-600"
                    : rating <= 3
                    ? "bg-red-600"
                    : "bg-indigo-700/90"
                }`}
              >
                {Math.round(rating * 10) / 10}
              </p>
            </div>
            <p>{description}</p>
            <p className="text-neutral-50 mt-2 mb-4 font-medium">
              Movie length: {Math.floor(runtime / 60)}h {runtime % 60}m
            </p>
            <div className="flex items-center gap-2 justify-end">
              <Link
                href={`https://letterboxd.com/film/${name
                  .replace(" ", "-")
                  .toLowerCase()}/`}
                className="bg-indigo-700/60 font-medium px-4 py-2 rounded-xl duration-300 hover:text-white text-neutral-50 hover:bg-indigo-700"
              >
                Letterboxd
              </Link>
              <Link
                className="bg-indigo-700/60 font-medium px-4 py-2 rounded-xl duration-300 hover:text-white text-neutral-50 hover:bg-indigo-700"
                href={`https://www.imdb.com/title/${imdbId}/`}
              >
                IMDb
              </Link>
            </div>
            <h2 className="font-medium text-lg md:text-xl pb-2 pt-4 md:pb-4 text-neutral-50">
              Similar Movies
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 items-start">
              {similarMovies.map((movie) => (
                <PosterCard
                  key={movie.id}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  name={movie.title}
                  media_type={movie.media_type}
                  release_year={movie.release_date?.slice(0, 4)}
                  id={movie.id}
                  rating={movie.vote_average}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default MovieTemplate;
