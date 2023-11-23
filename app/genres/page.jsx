"use client";
import Input from "@/components/Input";
import PageContainer from "@/components/PageContainer";
import fetchGenres from "@/lib/fetchGenres";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Catalog = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const gridContainerClasses =
    "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  const categorySquareClasses =
    "flex aspect-square items-center justify-center rounded-xl";
  const router = useRouter();

  useEffect(() => {
    Promise.all([fetchGenres({ setGenres, setIsLoading })]).then(() => {
      setIsLoading(false);
    });
  }, []);

  const handleGenreClick = (genre) => {
    router.push(`/movies?genre=${genre.id}`);
    setSearchQuery("");
  };

  return (
    <>
      <PageContainer>
        <Input
          type="text"
          placeholder="Category Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full mb-4"
        />

        {isLoading ? (
          <div className={gridContainerClasses}>
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className={`${categorySquareClasses} animate-pulse`}
              ></div>
            ))}
          </div>
        ) : (
          <div className={gridContainerClasses}>
            {genres
              .filter((genre) =>
                genre.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((genre, index) => (
                <button
                  key={genre.id}
                  className={`${categorySquareClasses} duration-300 active:scale-95 ${
                    index % 2 !== 0 ? "bg-indigo-900/50" : "bg-indigo-800/50"
                  } hover:bg-indigo-700/80`}
                  onClick={() => handleGenreClick(genre)}
                >
                  <p className="text-xl md:text-2xl font-medium">
                    {genre.name}
                  </p>
                </button>
              ))}
          </div>
        )}
      </PageContainer>
    </>
  );
};

export default Catalog;
