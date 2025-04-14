import Image from 'next/image';
import React from 'react'

const getMovie = async(id) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjM0OGMyNjA4NjAxODQ5ZTFkMTRjNGRhZmQxMjU5MyIsIm5iZiI6MTcwNzY1MjY0NC43NjgsInN1YiI6IjY1YzhiNjI0ZTI5NWI0MDE3YmY5M2ZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w-ckB7W3OcFfZUpLfRSDoho30D5K4DG3p-vzSVIDHvY'
        }
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      return await res.json()
}

const Page = async({params}) => {
    const id= params.id
    const movieDetail = await getMovie(id)
    console.log(movieDetail, "movieDetail");

  return (
    <div className='flex items-center justify-between gap-8 p-10'>
         <Image width={500} height={600} src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} className="object-cover flex-1" alt={movieDetail?.title || "Movie"}/>
         <div className='flex-1 text'>
            <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
            <div>{movieDetail?.overview}</div>
            <div> İMDB :  {movieDetail?.vote_average} </div>
            <div>{movieDetail?.release_date}</div>
            <div className='my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer'>Trail</div>
         </div>

    </div>
  )
}

export default Page