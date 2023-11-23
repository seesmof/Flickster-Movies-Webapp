const fetchGenres = async ({ setGenres, setIsLoading }) => {
  setIsLoading(true);
  const data = (
    await fetch(
      `${process.env.API_BASE_URL}/genre/movie/list?language=en&api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json())
  ).genres;
  setGenres(data);
  setIsLoading(false);
};

export default fetchGenres;
