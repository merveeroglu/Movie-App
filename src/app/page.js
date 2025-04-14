import Movies from "@/components/Movies";
import React from "react";
import Tabs from "@/components/Tabs";

export default async function Home({searchParams}) {
  const params = await searchParams;
  console.log(params.genre, "searchParams");
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjM0OGMyNjA4NjAxODQ5ZTFkMTRjNGRhZmQxMjU5MyIsIm5iZiI6MTcwNzY1MjY0NC43NjgsInN1YiI6IjY1YzhiNjI0ZTI5NWI0MDE3YmY5M2ZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w-ckB7W3OcFfZUpLfRSDoho30D5K4DG3p-vzSVIDHvY'
    }
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.genre ? params.genre : "top_rated"}?language=en-US&page=1`, options)
  const data = await res.json()

  console.log(data?.results, "data?.results");

  return (
    <div className="flex items-center justify-center flex-wrap gap-7 py-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  )
}
