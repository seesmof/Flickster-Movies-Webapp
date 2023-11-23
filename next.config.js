/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org", "blog.richersounds.com"],
  },
  env: {
    TMDB_API_KEY: "e87b47516389ca897c5e6acdc3068cc2",
    API_BASE_URL: "https://api.themoviedb.org/3",
  },
};

module.exports = nextConfig;
