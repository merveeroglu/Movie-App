"use client"
import React, { useEffect, useState } from "react";
import Movies from "@/components/Movies";

const Page = ({ params }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const resolvedParams = React.use(params);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const keyword = resolvedParams.keyword.trim().replace(/\s+/g, '+');
        console.log('Searching for:', keyword);

        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&include_adult=false&language=en-US&page=1`;
        console.log('API URL:', url);

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjM0OGMyNjA4NjAxODQ5ZTFkMTRjNGRhZmQxMjU5MyIsIm5iZiI6MTcwNzY1MjY0NC43NjgsInN1YiI6IjY1YzhiNjI0ZTI5NWI0MDE3YmY5M2ZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w-ckB7W3OcFfZUpLfRSDoho30D5K4DG3p-vzSVIDHvY'
          },
          cache: 'no-store'
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log('API Response:', data);

        if (!data.results) {
          throw new Error('No results in API response');
        }

        setMovies(data.results);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [resolvedParams.keyword]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

  if (!movies.length) {
    return <div className="p-4">No movies found for "{resolvedParams.keyword}"</div>;
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      {movies.map((dt) => (
        <Movies key={dt.id} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
